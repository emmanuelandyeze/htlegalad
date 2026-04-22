import { MongoClient } from 'mongodb';
import { getToken } from 'next-auth/jwt';
import { slugify } from '@/app/utils/slugify';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const clientPromise = MongoClient.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

// Configure DOMPurify with JSDOM
const window = new JSDOM('').window;
const DOMPurifyInstance = DOMPurify(window);

export const GET = async (req, { params }) => {
	try {
		const client = await clientPromise;
		const db = client.db('htlegal');

		if (!params.slug) {
			return new Response(
				JSON.stringify({ error: 'Slug is required' }),
				{ status: 400 },
			);
		}

		const post = await db
			.collection('posts')
			.findOne({ slug: params.slug });

		if (!post) {
			return new Response(
				JSON.stringify({ error: 'Post not found' }),
				{ status: 404 },
			);
		}

		return new Response(JSON.stringify(post), {
			status: 200,
		});
	} catch (error) {
		console.error('Error fetching post:', error);
		return new Response(
			JSON.stringify({ error: 'Internal Server Error' }),
			{
				status: 500,
			},
		);
	}
};

export const DELETE = async (req, { params }) => {
	try {
		const token = await getToken({
			req,
			secret: process.env.NEXTAUTH_SECRET,
		});

		if (!token) {
			return new Response(
				JSON.stringify({ error: 'Unauthorized' }),
				{ status: 401 },
			);
		}

		const client = await clientPromise;
		const db = client.db('htlegal');

		if (!params.slug) {
			return new Response(
				JSON.stringify({ error: 'Slug is required' }),
				{ status: 400 },
			);
		}

		const result = await db
			.collection('posts')
			.deleteOne({ slug: params.slug });

		if (result.deletedCount === 0) {
			return new Response(
				JSON.stringify({ error: 'Post not found' }),
				{ status: 404 },
			);
		}

		return new Response(
			JSON.stringify({
				message: 'Post deleted successfully',
			}),
			{ status: 200 },
		);
	} catch (error) {
		console.error('Error deleting post:', error);
		return new Response(
			JSON.stringify({ error: 'Internal Server Error' }),
			{
				status: 500,
			},
		);
	}
};

export const PUT = async (req, { params }) => {
	try {
		const token = await getToken({
			req,
			secret: process.env.NEXTAUTH_SECRET,
		});

		if (!token) {
			return new Response(
				JSON.stringify({ error: 'Unauthorized' }),
				{ status: 401 },
			);
		}

		const client = await clientPromise;
		const db = client.db('htlegal');
		const data = await req.json();

		if (!params.slug) {
			return new Response(
				JSON.stringify({ error: 'Slug is required' }),
				{ status: 400 },
			);
		}

		// Sanitize content if it's being updated
		let updatedData = { ...data };
		if (data.content) {
			updatedData.content = DOMPurifyInstance.sanitize(
				data.content,
			);
		}
		if (data.title) {
			updatedData.slug = slugify(data.title);
		}

		// Remove _id from data to avoid MongoDB error if it's present
		delete updatedData._id;

		const result = await db
			.collection('posts')
			.updateOne({ slug: params.slug }, { $set: updatedData });

		if (result.matchedCount === 0) {
			return new Response(
				JSON.stringify({ error: 'Post not found' }),
				{ status: 404 },
			);
		}

		return new Response(
			JSON.stringify({
				message: 'Post updated successfully',
				slug: updatedData.slug || params.slug,
			}),
			{ status: 200 },
		);
	} catch (error) {
		console.error('Error updating post:', error);
		return new Response(
			JSON.stringify({ error: 'Internal Server Error' }),
			{
				status: 500,
			},
		);
	}
};

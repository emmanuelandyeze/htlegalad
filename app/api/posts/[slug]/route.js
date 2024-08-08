import { MongoClient, ObjectId } from 'mongodb';

const clientPromise = MongoClient.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

export const GET = async (req, { params }) => {
	try {
		console.log('Params:', params);

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
		console.log('Params:', params);

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

import { slugify } from '@/app/utils/slugify';
import DOMPurify from 'dompurify';
import { MongoClient } from 'mongodb';
import { getToken } from 'next-auth/jwt';
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

export const POST = async (req) => {
	const token = await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET,
	});

	if (!token) {
		return new Response(
			JSON.stringify({ error: 'Unauthorized' }),
			{
				status: 401,
			},
		);
	}

	const client = await clientPromise;
	const db = client.db('htlegal'); // Replace with your database name
	const data = await req.json();

	const slug = slugify(data.title);
	// Sanitize content
	const sanitizedContent = DOMPurifyInstance.sanitize(
		data.content,
	);

	await db.collection('posts').insertOne({
		title: data.title,
		content: sanitizedContent,
		image: data.image,
		author: data.author,
		slug,
		createdAt: new Date(),
	});

	return new Response(
		JSON.stringify({ message: 'Post created' }),
		{
			status: 201,
		},
	);
};

export const GET = async (req) => {
	try {
		const client = await clientPromise;
		const db = client.db('htlegal'); // Replace with your database name

		const posts = await db
			.collection('posts')
			.find({})
			.sort({ createdAt: -1 })
			.toArray();

		return new Response(JSON.stringify(posts), {
			status: 200,
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal Server Error' }),
			{
				status: 500,
			},
		);
	}
};

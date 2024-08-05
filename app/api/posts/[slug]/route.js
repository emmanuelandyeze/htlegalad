import { MongoClient } from 'mongodb';

const clientPromise = MongoClient.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

export const GET = async (req, { params }) => {
	try {
		// Log the params to verify if slug is retrieved correctly
		console.log('Params:', params);

		const client = await clientPromise;
		const db = client.db('htlegal'); // Replace with your database name

		// Ensure slug is defined and not empty
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
		// Log the error for debugging purposes
		console.error('Error fetching post:', error);
		return new Response(
			JSON.stringify({ error: 'Internal Server Error' }),
			{
				status: 500,
			},
		);
	}
};

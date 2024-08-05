// app/api/auth/register/route.js

import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

let client;
let db;

const connectToDatabase = async () => {
	if (!client) {
		client = new MongoClient(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		await client.connect();
		db = client.db('htlegal'); // Replace with your database name
	}
	return db;
};

export async function POST(req) {
	try {
		const { email, password } = await req.json();

		if (!email || !password) {
			console.error('Email and password are required');
			return new Response(
				JSON.stringify({
					error: 'Email and password are required',
				}),
				{ status: 400 },
			);
		}

		const db = await connectToDatabase();

		const existingUser = await db
			.collection('users')
			.findOne({ email });

		if (existingUser) {
			console.error('User already exists');
			return new Response(
				JSON.stringify({ error: 'User already exists' }),
				{ status: 400 },
			);
		}

		const hashedPassword = bcrypt.hashSync(password, 10);

		const newUser = {
			email,
			password: hashedPassword,
		};

		await db.collection('users').insertOne(newUser);

		return new Response(
			JSON.stringify({
				message: 'User created successfully',
			}),
			{ status: 201 },
		);
	} catch (error) {
		console.error('Internal server error:', error);
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500 },
		);
	}
}

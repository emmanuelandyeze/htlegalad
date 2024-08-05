import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const clientPromise = MongoClient.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				const client = await clientPromise;
				const db = client.db('htlegal'); // Replace with your database name

				const user = await db
					.collection('users')
					.findOne({ email: credentials.email });

				if (
					user &&
					bcrypt.compareSync(
						credentials.password,
						user.password,
					)
				) {
					return { email: user.email };
				} else {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
		error: '/auth/error',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});
		if (res?.error) {
			alert(res.error);
		} else {
			router.push('/blog/new');
		}
	};

	return (
		<div className=" pt-40 bg-[#f1f1f1] min-h-screen">
			<div className="max-w-md mx-auto p-6 rounded-md bg-white shadow-md">
				<h1 className="text-2xl font-bold mb-4">Sign In</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-gray-700">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full border border-gray-300 p-2 rounded mt-1"
						/>
					</div>
					<div>
						<label className="block text-gray-700">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full border border-gray-300 p-2 rounded mt-1"
						/>
					</div>
					<button
						type="submit"
						className="bg-teal text-white py-2 px-4 rounded hover:bg-gold transition duration-300"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

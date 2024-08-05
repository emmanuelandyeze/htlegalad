// app/register/page.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		const res = await fetch('/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const data = await res.json();

		if (res.ok) {
			router.push('/auth/signin');
		} else {
			setError(data.error);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4">
					Register
				</h1>
				{error && (
					<p className="text-red-500 mb-4">{error}</p>
				)}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-teal text-white p-2 rounded"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;

'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';
import Image from 'next/image';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});
		if (res?.error) {
			setError('Invalid email or password');
			setLoading(false);
		} else {
			router.push('/admin');
		}
	};

	return (
		<div className="min-h-screen bg-[#f8fafc] relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			{/* Background decorations */}
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
				<svg
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="grid"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 40 0 L 0 0 0 40"
								fill="none"
								stroke="#2C3E50"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						fill="url(#grid)"
					/>
				</svg>
			</div>
			<div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-navy/5 rounded-full blur-[120px] pointer-events-none"></div>

			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md"
			>
				<div className="flex justify-center">
					<Image
						src="/images/htlogo.png"
						alt="HT Legal Advisory"
						width={120}
						height={120}
						className="h-20 w-auto"
					/>
				</div>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-navy tracking-tight">
					Sign in to your account
				</h2>
				<p className="mt-2 text-center text-sm text-primaryText font-medium">
					Admin Access Only
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="mt-8 relative z-10 sm:mx-auto sm:w-full sm:max-w-md"
			>
				<div className="bg-white/80 backdrop-blur-sm py-8 px-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white sm:rounded-3xl sm:px-10">
					<form
						className="space-y-6"
						onSubmit={handleSubmit}
					>
						{error && (
							<motion.div
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded-r-lg"
							>
								<p className="text-sm text-red-700 font-medium">
									{error}
								</p>
							</motion.div>
						)}

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-700 ml-1 mb-1"
							>
								Email address
							</label>
							<div className="mt-1 relative group">
								<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
									<HiMail className="h-5 w-5 text-gray-400 group-focus-within:text-navy transition-colors" />
								</div>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
									className="block w-full pl-11 pr-3 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy focus:bg-white focus:border-transparent sm:text-sm transition-all placeholder:text-gray-300"
									placeholder="admin@htlegaladvisory.in"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-semibold text-gray-700 ml-1 mb-1"
							>
								Password
							</label>
							<div className="mt-1 relative group">
								<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
									<HiLockClosed className="h-5 w-5 text-gray-400 group-focus-within:text-navy transition-colors" />
								</div>
								<input
									id="password"
									name="password"
									type={
										showPassword
											? 'text'
											: 'password'
									}
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) =>
										setPassword(
											e.target.value,
										)
									}
									className="block w-full pl-11 pr-11 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy focus:bg-white focus:border-transparent sm:text-sm transition-all placeholder:text-gray-300"
									placeholder="••••••••"
								/>
								<div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
									<button
										type="button"
										onClick={() =>
											setShowPassword(
												!showPassword,
											)
										}
										className="text-gray-400 hover:text-navy focus:outline-none transition-colors"
									>
										{showPassword ? (
											<HiEyeOff className="h-5 w-5" />
										) : (
											<HiEye className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>
						</div>

						<div className="pt-2">
							<button
								type="submit"
								disabled={loading}
								className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white bg-navy hover:bg-[#1e2a36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-navy/20 ${
									loading
										? 'opacity-70 cursor-not-allowed'
										: ''
								}`}
							>
								{loading ? (
									<svg
										className="animate-spin h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								) : (
									'Sign in'
								)}
							</button>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
}

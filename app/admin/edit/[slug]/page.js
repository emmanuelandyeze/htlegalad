'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCloudUpload, HiCheck } from 'react-icons/hi';
import Link from 'next/link';

const ReactQuill = dynamic(() => import('react-quill'), {
	ssr: false,
});

const EditPost = () => {
	const { data: session, status } = useSession();
	const { register, handleSubmit, reset, setValue } = useForm();
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);
	const router = useRouter();
	const params = useParams();
	const [loading, setLoading] = useState(false);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/auth/signin');
		} else if (status === 'authenticated' && params.slug) {
			fetchPost();
		}
	}, [status, params.slug]);

	const fetchPost = async () => {
		try {
			const res = await fetch(`/api/posts/${params.slug}`);
			if (res.ok) {
				const post = await res.json();
				setValue('title', post.title);
				setContent(post.content);
				setImage(post.image);
			} else {
				alert('Post not found');
				router.push('/admin');
			}
		} catch (error) {
			console.error('Error fetching post:', error);
		} finally {
			setFetching(false);
		}
	};

	const onSubmit = async (data) => {
		setLoading(true);
		data.content = content;
		data.image = image;

		const res = await fetch(`/api/posts/${params.slug}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (res.ok) {
			setLoading(false);
			alert('Post updated successfully!');
			router.push('/admin');
		} else {
			setLoading(false);
			alert('Failed to update post');
		}
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		setLoading(true);
		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', 'htlegal');

		try {
			const res = await fetch(
				'https://api.cloudinary.com/v1_1/dg0lat2d3/image/upload',
				{
					method: 'POST',
					body: formData,
				},
			);
			const data = await res.json();
			setImage(data.secure_url);
		} catch (error) {
			console.error('Upload error:', error);
			alert('Image upload failed');
		} finally {
			setLoading(false);
		}
	};

	if (status === 'loading' || fetching) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#f8fafc] py-40 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-8 flex items-center justify-between">
					<Link
						href="/admin"
						className="inline-flex items-center text-navy hover:text-teal font-bold transition-colors group"
					>
						<HiArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
						Back to Dashboard
					</Link>
					<h1 className="text-2xl font-extrabold text-navy tracking-tight">Edit Post</h1>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 md:p-12 border border-white"
				>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<div>
							<label className="block text-sm font-bold text-gray-700 ml-1 mb-2">
								Post Title
							</label>
							<input
								type="text"
								{...register('title', { required: true })}
								placeholder="Enter a compelling title..."
								className="w-full bg-gray-50/50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy focus:bg-white transition-all text-lg font-medium"
							/>
						</div>

						<div>
							<label className="block text-sm font-bold text-gray-700 ml-1 mb-2">
								Featured Image
							</label>
							<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-100 border-dashed rounded-[2rem] hover:border-teal/50 transition-colors bg-gray-50/30">
								<div className="space-y-1 text-center w-full">
									{image ? (
										<div className="relative group max-w-lg mx-auto">
											<img
												src={image}
												alt="Preview"
												className="mx-auto h-64 w-full object-cover rounded-2xl shadow-md"
											/>
											<div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
												<label className="cursor-pointer text-white font-bold flex items-center bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30">
													<HiCloudUpload className="mr-2 h-6 w-6" />
													Change Image
													<input type="file" className="hidden" onChange={handleImageUpload} />
												</label>
											</div>
										</div>
									) : (
										<label className="cursor-pointer block p-10 group">
											<div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4 group-hover:scale-110 transition-transform">
												<HiCloudUpload className="h-10 w-10 text-gray-300 group-hover:text-teal transition-colors" />
											</div>
											<div className="flex text-sm text-gray-600 mt-2 justify-center">
												<span className="relative font-bold text-teal">Upload a file</span>
												<p className="pl-1">or drag and drop</p>
											</div>
											<p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>
											<input type="file" className="hidden" onChange={handleImageUpload} />
										</label>
									)}
								</div>
							</div>
						</div>

						<div>
							<label className="block text-sm font-bold text-gray-700 ml-1 mb-2">
								Content
							</label>
							<div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-inner ring-1 ring-black/5">
								<ReactQuill
									theme="snow"
									value={content}
									onChange={setContent}
									className="h-[400px]"
								/>
							</div>
						</div>

						<div className="pt-10 flex justify-end">
							<button
								type="submit"
								disabled={loading}
								className={`inline-flex items-center px-12 py-4 border border-transparent rounded-[1.25rem] shadow-xl text-base font-bold text-white bg-navy hover:bg-[#1e2a36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-navy/20 ${loading ? 'opacity-70 cursor-not-allowed' : ''
									}`}
							>
								{loading ? (
									<>
										<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Updating...
									</>
								) : (
									<>
										<HiCheck className="-ml-1 mr-2 h-6 w-6" />
										Update Post
									</>
								)}
							</button>
						</div>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default EditPost;

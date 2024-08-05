'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill'), {
	ssr: false,
});

const CreatePost = () => {
	const { data: session, status } = useSession();
	const { register, handleSubmit, reset } = useForm();
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'unauthenticated') {
		router.push('/auth/signin');
		return null;
	}

	const onSubmit = async (data) => {
		setLoading(true);
		data.content = content;
		data.image = image;
		data.author = session.user.email;
		const res = await fetch('/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (res.ok) {
			setLoading(false);
			alert('Post created successfully!');
			reset();
			setContent('');
			setImage(null);
		} else {
			setLoading(false);
			alert('Post not created. Please try again!');
		}
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', 'htlegal');

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dg0lat2d3/image/upload',
			{
				method: 'POST',
				body: formData,
			},
		);

		const data = await res.json();
		setImage(data.secure_url);
	};

	return (
		<div className="py-40">
			<div className="max-w-4xl mx-auto p-4 bg-white shadow-md">
				<h1 className="text-2xl font-bold mb-4">
					Create New Post
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<div>
						<label className="block text-gray-700">
							Title
						</label>
						<input
							type="text"
							{...register('title', { required: true })}
							className="w-full border border-gray-300 p-2 rounded mt-1"
						/>
					</div>
					<div className="">
						<label className="block text-gray-700">
							Image
						</label>
						<input
							type="file"
							onChange={handleImageUpload}
							className="mt-1"
						/>
						{image && (
							<img
								src={image}
								alt="Uploaded"
								className="mt-4 h-32 w-32 object-cover"
							/>
						)}
					</div>
					<div>
						<label className="block text-gray-700">
							Content
						</label>
						<ReactQuill
							value={content}
							onChange={setContent}
							className="h-80"
						/>
					</div>
					<div className="pt-10"></div>
					<button
						type="submit"
						className="bg-teal text-white py-2 px-4 rounded hover:bg-gold transition duration-300"
					>
						{loading ? 'Posting...' : 'Create Post'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Grid } from 'react-loader-spinner';
// import format from 'date-fns';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Post() {
	const router = useRouter();
	const { slug } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		if (slug) {
			async function fetchPost() {
				const response = await fetch(`/api/posts/${slug}`);
				console.log(response);
				const data = await response.json();
				setPost(data);
			}

			fetchPost();
		}
	}, [slug]);

	// console.log(post);

	if (!post) {
		return (
			<div className="pt-40 flex justify-center items-center min-h-screen">
				<Grid
					visible={true}
					height="80"
					width="80"
					color="#1ABC9C"
					ariaLabel="grid-loading"
					radius="12.5"
					wrapperStyle={{}}
					wrapperClass="grid-wrapper"
				/>
			</div>
		);
	}

	// const formattedDate = format(
	// 	new Date(post.createdAt),
	// 	'MMMM dd, yyyy',
	// );

	return (
		<div className="pt-20 lg:pt-36">
			<div className=" max-w-3xl p-4 mx-auto">
				<div
					className="flex flex-row gap-3 cursor-pointer items-center mb-5"
					onClick={() => router.back()}
				>
					<IoMdArrowRoundBack
						size={32}
						className="text-gray-600"
					/>
					<p className="text-lg font-bold text-gray-600">
						Go Back
					</p>
				</div>
			</div>
			<div
				className="relative max-w-3xl mx-auto p-4 bg-cover bg-center h-64"
				style={{ backgroundImage: `url(${post.image})` }}
			>
				<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 text-white">
					<h1 className="text-xl lg:text-3xl font-bold">
						{post.title}
					</h1>
					{/* <p className="text-sm">{formattedDate}</p> */}
				</div>
			</div>
			<div className="max-w-3xl mx-auto p-4">
				<div
					className="text-gray-600 mt-4"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</div>
		</div>
	);
}

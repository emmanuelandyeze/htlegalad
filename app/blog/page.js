'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Grid } from 'react-loader-spinner';
import Masonry from 'react-masonry-css';

export default function Blog() {
	const [posts, setPosts] = useState([]);
	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchPosts() {
			setLoading(true);
			const response = await fetch('/api/posts');
			const data = await response.json();
			setPosts(data);
			setLoading(false);
		}

		fetchPosts();
	}, []);

	

	if (loading) {
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

	const breakpointColumnsObj = {
		default: 4,
		1100: 2,
		700: 1,
	};

	return (
		<div className="pt-20 lg:pt-32 mb-80">
			<div className="max-w-7xl mx-auto p-4">
				<div className="flex flex-row items-center mb-8 justify-between">
					<h1 className="text-2xl font-bold">
						News and Articles
					</h1>
					{status === 'authenticated' && (
						<Link
							href={'/blog/new'}
							className="bg-navy px-4 py-2 rounded-md"
						>
							<p className="text-white">Create new post</p>
						</Link>
					)}
				</div>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="flex w-auto"
					columnClassName="masonry-column"
				>
					{posts?.map((post) => (
						<>
							<Link
								href={`/blog/${post.slug}`}
								key={post._id}
								className="bg-[#f0f0f0] overflow-hidden shadow rounded-md hover:shadow-md cursor-pointer transition-shadow duration-200 mb-4"
							>
								<div className="relative w-full h-full">
									<Image
										src={post.image}
										layout="fill"
										objectFit="cover"
										alt="post image"
									/>
								</div>
								<div className="p-4">
									<h2 className="text-xl font-bold mb-2">
										{post.title}
									</h2>
									<p className="text-gray-600">
										{post.content
											.replace(/<[^>]+>/g, '')
											.slice(0, 100)}
										...
									</p>
									<Link href={`/blog/${post.slug}`}>
										<p className="text-teal hover:underline mt-4 block">
											Read more
										</p>
									</Link>
								</div>
							</Link>
						</>
					))}
				</Masonry>
			</div>
		</div>
	);
}

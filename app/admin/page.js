'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiPlus, HiPencil, HiTrash, HiExternalLink, HiLogout } from 'react-icons/hi';
import Image from 'next/image';

export default function AdminDashboard() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/auth/signin');
		} else if (status === 'authenticated') {
			fetchPosts();
		}
	}, [status]);

	const fetchPosts = async () => {
		try {
			const res = await fetch('/api/posts');
			const data = await res.json();
			setPosts(data);
		} catch (error) {
			console.error('Error fetching posts:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (slug) => {
		if (confirm('Are you sure you want to delete this post?')) {
			try {
				const res = await fetch(`/api/posts/${slug}`, {
					method: 'DELETE',
				});
				if (res.ok) {
					setPosts(posts.filter((post) => post.slug !== slug));
				} else {
					alert('Failed to delete post');
				}
			} catch (error) {
				console.error('Error deleting post:', error);
			}
		}
	};

	if (status === 'loading' || loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#f8fafc] py-40 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<h1 className="text-3xl font-bold text-navy tracking-tight">Blog Management</h1>
						<p className="mt-2 text-gray-600 font-medium">Manage your articles and stories</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="mt-6 md:mt-0 flex items-center space-x-4"
					>
						<button
							onClick={() => signOut()}
							className="inline-flex items-center px-6 py-3.5 border border-gray-200 rounded-2xl shadow-sm text-sm font-bold text-gray-600 bg-white hover:bg-red-50 hover:text-red-500 transition-all transform hover:-translate-y-1 active:translate-y-0"
						>
							<HiLogout className="-ml-1 mr-2 h-5 w-5" />
							Logout
						</button>
						<Link
							href="/blog/new"
							className="inline-flex items-center px-6 py-3.5 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white bg-navy hover:bg-[#1e2a36] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-navy/20"
						>
							<HiPlus className="-ml-1 mr-2 h-5 w-5" />
							Create New Post
						</Link>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="bg-white/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] overflow-hidden border border-white"
				>
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-100">
							<thead className="bg-gray-50/50">
								<tr>
									<th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Post</th>
									<th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Author</th>
									<th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Date</th>
									<th className="px-8 py-5 text-right text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
								</tr>
							</thead>
							<tbody className="bg-transparent divide-y divide-gray-50">
								{posts.map((post) => (
									<tr key={post._id} className="hover:bg-white/50 transition-colors group">
										<td className="px-8 py-5 whitespace-nowrap">
											<div className="flex items-center">
												<div className="h-14 w-14 flex-shrink-0 rounded-2xl overflow-hidden relative border border-gray-100 shadow-sm transition-transform group-hover:scale-105 duration-300">
													<Image
														src={post.image || '/images/hero.jpg'}
														alt=""
														fill
														className="object-cover"
													/>
												</div>
												<div className="ml-5">
													<div className="text-sm font-bold text-navy truncate max-w-[200px] md:max-w-md group-hover:text-teal transition-colors">
														{post.title}
													</div>
													<div className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter mt-1">/{post.slug}</div>
												</div>
											</div>
										</td>
										<td className="px-8 py-5 whitespace-nowrap">
											<div className="text-sm text-gray-600 font-semibold">{post.author?.split('@')[0]}</div>
											<div className="text-[10px] text-gray-400 font-medium lowercase italic">{post.author}</div>
										</td>
										<td className="px-8 py-5 whitespace-nowrap">
											<div className="text-sm text-gray-500 font-medium">
												{new Date(post.createdAt).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric',
													year: 'numeric',
												})}
											</div>
										</td>
										<td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
											<div className="flex justify-end space-x-2">
												<Link
													href={`/blog/${post.slug}`}
													target="_blank"
													className="p-2.5 text-gray-400 hover:text-navy hover:bg-navy/5 rounded-xl transition-all"
													title="View Post"
												>
													<HiExternalLink className="h-5 w-5" />
												</Link>
												<Link
													href={`/admin/edit/${post.slug}`}
													className="p-2.5 text-gray-400 hover:text-teal hover:bg-teal/5 rounded-xl transition-all"
													title="Edit Post"
												>
													<HiPencil className="h-5 w-5" />
												</Link>
												<button
													onClick={() => handleDelete(post.slug)}
													className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
													title="Delete Post"
												>
													<HiTrash className="h-5 w-5" />
												</button>
											</div>
										</td>
									</tr>
								))}
								{posts.length === 0 && (
									<tr>
										<td colSpan="4" className="px-8 py-32 text-center text-gray-500">
											<div className="flex flex-col items-center">
												<div className="bg-gray-100 p-6 rounded-[2rem] mb-6">
													<HiPlus className="h-10 w-10 text-gray-300" />
												</div>
												<p className="text-lg font-bold text-navy">No posts yet</p>
												<p className="text-sm text-gray-400 mt-1 mb-6">Get started by creating your first article</p>
												<Link
													href="/blog/new"
													className="px-6 py-2.5 bg-teal/10 text-teal rounded-xl hover:bg-teal hover:text-white transition-all font-bold text-sm"
												>
													Create your first post
												</Link>
											</div>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

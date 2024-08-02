'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-navy shadow-md  px-4 lg:py-2">
			<div className="flex flex-col max-w-7xl mx-auto items-start w-full">
				<div className="flex flex-row justify-between items-center w-full">
					<div className="text-white text-lg font-bold">
						{/* Logo Section */}
						<Link href="/">
							<Image
								src={'/images/htlogo.png'}
								width={70}
								height={70}
							/>
						</Link>
					</div>
					<div className="hidden md:flex space-x-6">
						{/* Navigation Items */}
						<Link href="/about">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								About
							</p>
						</Link>
						<Link href="/services">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								Services
							</p>
						</Link>
						<Link href="/contact">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								Contact
							</p>
						</Link>
						<Link href="/blog">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								Blog
							</p>
						</Link>
					</div>
					<div className="hidden md:block">
						{/* Appointment Button */}
						<Link href="/appointment">
							<p className="bg-[#1ABC9C] text-md text-white py-2 px-4 rounded-md hover:bg-gold transition duration-300">
								Book an Appointment
							</p>
						</Link>
					</div>
					<div className="md:hidden">
						<div className="flex flex-row items-center gap-5 px-2">
							{/* Responsive Navigation Items */}
							<Link href="/about">
								<p className="text-secondaryText hover:text-teal">
									About
								</p>
							</Link>
							<Link href="/services">
								<p className="text-secondaryText hover:text-teal">
									Services
								</p>
							</Link>
							<Link href="/contact">
								<p className="text-secondaryText hover:text-teal">
									Contact
								</p>
							</Link>
							<Link href="/blog">
								<p className="text-secondaryText hover:text-teal">
									Blog
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

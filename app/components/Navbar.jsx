'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: session, status } = useSession();

	console.log(status)

	return (
		<nav className="bg-navy fixed w-full z-50 px-4 lg:py-2">
			<div className="flex flex-col max-w-7xl mx-auto items-start w-full">
				<div className="flex flex-row py-2 justify-between items-center w-full">
					<div className="text-white text-lg font-bold">
						{/* Logo Section */}
						<Link
							href="/"
							className="flex flex-col items-center"
						>
							<Image
								src={'/images/logo2.png'}
								width={80}
								height={70}
							/>
							{/* <p className='text-sm font-normal text-[#f1f1f1]'>LEGAL ADVISORY</p> */}
						</Link>
					</div>
					<div className="hidden md:flex space-x-6">
						{/* Navigation Items */}
						<Link href="/#about">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								About
							</p>
						</Link>
						<Link href="/#services">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								Services
							</p>
						</Link>
						<Link href="/#contact">
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
						<Link target='_blank' href="https://forms.gle/D5Zf3JMrEYbquHKj7">
							<p className="bg-[#1ABC9C] text-md text-white py-2 px-4 rounded-md hover:bg-gold transition duration-300">
								Book an Appointment
							</p>
						</Link>
					</div>
					<div className="md:hidden">
						<div className="flex flex-row items-center gap-5 px-2">
							{/* Responsive Navigation Items */}
							<Link href="/#about">
								<p className="text-secondaryText hover:text-teal">
									About
								</p>
							</Link>
							<Link href="/#services">
								<p className="text-secondaryText hover:text-teal">
									Services
								</p>
							</Link>
							<Link href="/#contact">
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

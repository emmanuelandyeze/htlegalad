'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { data: session, status } = useSession();
	const pathname = usePathname()

	console.log(pathname)

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed w-full z-50 px-4 lg:py-2 transition-colors bg-navy duration-300 ${pathname !== '/' ? 'bg-navy' : scrolled ? 'bg-navy' : 'bg-transparent'}`}
		>
			<div className="flex flex-col max-w-7xl mx-auto items-start w-full">
				<div className="flex flex-row py-2 justify-between items-center w-full">
					<div className="text-white text-lg font-bold">
						{/* Logo Section */}
						<Link
							href="/"
							className="flex flex-col items-center"
						>
							<Image
								src={'/images/logo3.png'}
								width={80}
								height={70}
								alt="Logo"
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
						{/* <Link href="/#contact">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								Contact
							</p>
						</Link> */}
						<Link href="/blog">
							<p className="text-secondaryText hover:text-teal hover:underline hover:underline-offset-4">
								News & Articles
							</p>
						</Link>
					</div>
					<div className="hidden md:block">
						{/* Appointment Button */}
						<Link
							target="_blank"
							href="https://www.coachli.co/htlegal"
						>
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
							{/* <Link href="/#contact">
								<p className="text-secondaryText hover:text-teal">
									Contact
								</p>
							</Link> */}
							<Link href="/blog">
								<p className="text-secondaryText hover:text-teal">
									Articles
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

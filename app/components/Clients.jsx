'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LogoGrid from './LogoGrid';

const images = [
	{ src: '/images/client1.jpg', alt: 'Client 1' },
	{ src: '/images/client2.jpg', alt: 'Client 2' },
	{ src: '/images/client3.jpg', alt: 'Client 3' },
	{ src: '/images/client4.jpg', alt: 'Client 4' },
	{ src: '/images/client5.jpg', alt: 'Client 5' },
	{ src: '/images/client6.jpg', alt: 'Client 6' },
	{ src: '/images/client7.jpg', alt: 'Client 7' },
	{ src: '/images/client8.jpg', alt: 'Client 8' },
];

const Clients = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slideRef = useRef(null);

	const handleSlide = () => {
		if (slideRef.current) {
			slideRef.current.style.transition =
				'transform 0.5s ease-in-out';
			slideRef.current.style.transform = `translateX(-${
				currentIndex * 100
			}%)`;
		}
	};

	useEffect(() => {
		handleSlide();
		const interval = setInterval(() => {
			setCurrentIndex(
				(prevIndex) =>
					(prevIndex + 1) % Math.ceil(images.length / 4),
			);
		}, 4000); // Change slide every 3 seconds

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="bg-white pt-5 lg:pt-10 pb-10">
			<div className="max-w-7xl flex flex-col justify-center items-start lg:items-center p-4 mx-auto">
				<h2 className="text-[40px] uppercase font-bold text-left mb-2  border-b-2 border-gold inline-block">
					Our Clients
				</h2>
				<p className="mb-6 text-[16px] md:w-[60%] md:text-center">
					We break barriers and transcend borders to provide
					world-class legal services to clients worldwide.
					Whether you are a business expanding into new
					markets, an entrepreneur navigating local and
					national regulations, or an individual seeking
					legal guidance from anywhere in the world, our law
					practice is equipped to serve you.
				</p>
				<div className="overflow-hidden">
					{/* <div ref={slideRef} className="flex">
						{Array.from({
							length: Math.ceil(images.length / 5),
						}).map((_, slideIndex) => (
							<div
								key={slideIndex}
								className="flex-shrink-0 flex w-full items-center space-x-4"
							>
								{images
									.slice(slideIndex * 4, slideIndex * 4 + 4)
									.map((image, index) => (
										<div
											key={index}
											className="flex-shrink-0 w-1/4"
										>
											<Image
												src={image.src}
												alt={image.alt}
												width={60}
												height={50}
												className="block lg:hidden"
											/>
											<Image
												src={image.src}
												alt={image.alt}
												width={150}
												height={50}
												className="hidden lg:block"
											/>
										</div>
									))}
							</div>
						))}
					</div> */}
					<LogoGrid />
				</div>
			</div>
		</div>
	);
};

export default Clients;

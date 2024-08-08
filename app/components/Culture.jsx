'use client';

// components/Advert.js
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Culture() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1, // Adjust this value as needed
			},
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return (
		<div className="max-w-5xl mx-auto pb-10" ref={ref}>
			<div className="flex flex-col md:flex-row-reverse items-center justify-between p-4">
				<div
					className={` flex justify-center md:justify-start mb-4 md:mb-0 transition-transform duration-1000 ${isVisible ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
				>
					<Image
						src="/images/culture.jpg"
						alt="Picture"
						width={300}
						height={300}
						className="object-cover"
					/>
				</div>
				<div
					className={`md:w-1/2 w-full md:pl-8 transition-transform text-center duration-1000 ${isVisible ? 'transform translate-x-0' : 'transform translate-x-full'}`}
				>
					<h1 className="text-4xl font-normal leading-[3rem] mb-6">
						Our Culture drives what we do.
					</h1>
					<p className="text-base md:text-lg">
						HT Legal takes a client-centered approach that
						ensures personalized, innovative, and dedicated
						legal solutions tailored to meet
						your unique needs.
					</p>
					<div className="mt-10 flex justify-center items-center">
						<a
							target="_blank"
							href="https://www.coachli.co/htlegal"
							className="bg-gray-300 text-black font-bold py-3 px-6 rounded-lg hover:bg-gold transition duration-300"
						>
							Book an Appointment
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

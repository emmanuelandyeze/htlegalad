'use client';

import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
	return (
		<div
			className="relative flex flex-col lg:flex-row items-center justify-between bg-cover bg-center h-[80vh] lg:h-[100vh] pt-40 lg:pt-28 lg:pb-10 p-4"
			style={{
				backgroundImage: `url('/images/hero.jpg')`,
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="max-w-7xl mx-auto pb-10">
				<div className="z-20 w-[100%] lg:w-[50%] flex flex-col justify-between items-start text-left lg:text-left lg:mt-10 pt-0 pb-0 lg:py-10 lg:mr-10 mb-8">
					<p className="text-lg z-10 text-white mb-8 lg:mb-10 slide-in-left">
						THE BUSINESS OF TOMORROW
					</p>
					<h1 className="text-5xl z-20 text-white lg:text-7xl leading-[3.5rem] lg:leading-[5rem] font-normal mb-4 lg:mb-8 slide-in-left">
						Be future-proof and future-ready.
					</h1>
					<p className="text-lg z-20 text-slate-100 mb-8 lg:mb-10 slide-in-left">
						At HT Legal, we are dedicated to understanding
						the uniqueness of existing as well as potential
						clients and this helps us to tailor our work to
						their distinctive needs.
					</p>
					<a
						target="_blank"
						href="https://www.coachli.co/htlegal"
						className="bg-white z-20 text-black py-3 px-6 rounded-xl hover:text-white hover:bg-gold transition duration-300"
					>
						Book an Appointment
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

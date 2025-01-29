'use client';

import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
	return (
		<div id="about" className="bg-[#f8f8f8] py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col mb-3 items-start lg:items-start">
					<h2 className="text-[40px] font-bold text-center mb-1 border-b-2 border-gold inline-block">
						About Us
					</h2>
					{/* <p>Who we are and what makes us tick.</p> */}
				</div>

				<div className="flex flex-col lg:flex-row items-center lg:items-start">
					<div className="lg:w-1/2">
						<h1 className="text-2xl mb-3">
							Strategy & Foresight
						</h1>
						<p className="text-lg text-primaryText mb-6">
							Established in 2021 to offer cost effective
							legal solutions to MSMEs as well as to cater
							to individual needs. We empower businesses
							through strategy and foresight. Expect
							competence, timely resolution and value
							for money invested!
						</p>

						<a
							target="_blank"
							href="https://www.coachli.co/htlegal"
							className="bg-teal text-white py-3 px-6 rounded hover:bg-gold transition duration-300"
						>
							Book an Appointment
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;

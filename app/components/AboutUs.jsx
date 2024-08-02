'use client';

import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
	return (
		<div id='about' className="bg-[#f8f8f8] py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col mb-6 items-start lg:items-center">
					<h2 className="text-3xl font-bold text-center mb-1 border-b-2 border-gold inline-block">
						About Us
					</h2>
					<p>Who we are and what makes us tick.</p>
				</div>

				<div className="flex flex-col lg:flex-row items-center lg:items-start">
					<div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
						<Image
							src="/images/justice.png"
							alt="About Us"
							width={550}
							height={500}
							className=""
						/>
					</div>
					<div className="lg:w-1/2">
						<p className="text-lg text-primaryText mb-6">
							At HT Legal, we are dedicated to understanding
							the uniqueness of existing as well as
							potential clients and this helps us to tailor
							our work to their distinctive needs. We place
							great emphasis on professionalism, competence,
							and respectability and we strive to build the
							feeling of confidence and trust together with
							our clients so that they can contact us
							anytime and anywhere. Over many years, our
							team has gained the experience and expertise
							necessary to make your journey with us as
							seamless as possible. We offer cost-effective
							legal solutions to micro, small and medium
							enterprises as well as cater to individual
							legal needs.
						</p>
						<p className="text-lg text-primaryText mb-6">
							Professional excellence is the hallmark of our
							practice. With HT Legal, you can expect timely
							resolution, excellent delivery and value for
							money spent. We believe ourselves to be
							properly positioned in a challenging and
							constantly changing market, where we help our
							clients overcome their most complex legal
							issues. By working with HT Legal, you get more
							than professional legal representation, you
							get premium value for expended resources and
							solutions delivered seamlessly. We are
							consistent, patient and professional, giving
							each new case our undivided attention whilst
							walking you through each step of the process.
						</p>
						<a
							href="/appointment"
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

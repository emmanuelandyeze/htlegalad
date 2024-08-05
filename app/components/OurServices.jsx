'use client';

import React from 'react';

const servicesData = [
	{
		title: 'EMPLOYMENT & LABOUR RELATIONS',
		icon: (
			<svg
				className="w-8 h-8 text-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M16 12v4m-8-4v4m-4-4h16M4 8h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"
				/>
			</svg>
		),
		items: [
			'Employee Onboarding',
			'Confidentiality Agreements',
			'Constructive Dismissal',
			'Employment Contracts',
			'Non-compete Agreements',
			'NDAs and Non-Circumvention Agreements',
		],
	},
	{
		title: 'CORPORATE & BUSINESS ADVISORY',
		icon: (
			<svg
				className="w-8 h-8 text-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M8 12l2-2m0 0l3 3m-3-3v12m6 0a2 2 0 001.85-1.06l2-4a2 2 0 00-1.85-2.94h-3.97a2 2 0 01-1.85-1.06l-1-2a2 2 0 00-1.85-1.06h-1.97a2 2 0 00-1.85 1.06l-2 4a2 2 0 001.85 2.94h3.97a2 2 0 011.85 1.06l1 2a2 2 0 001.85 1.06z"
				/>
			</svg>
		),
		items: [
			'Formation of Companies/Business Registration',
			'Legal audit and Due Diligence',
			'Taxation Advisory',
			'Trademark Registration',
			'Copyright and Patent Registration',
			'Contract Drafting and Review',
			'General Transaction Advisory',
		],
	},
	{
		title: 'ESTATE ADMINISTRATION',
		icon: (
			<svg
				className="w-8 h-8 text-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M7 10v4M17 10v4M5 7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
				/>
			</svg>
		),
		items: [
			'Obtaining Probate',
			'Processing Letters of Administration',
			'Drafting of Wills/Codicil',
			'Lodging of Wills at the Probate Section of the High Court',
		],
	},
	{
		title: 'TECHNOLOGY',
		icon: (
			<svg
				className="w-8 h-8 text-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M5 7l1.5 1.5L5 10M19 7l-1.5 1.5L19 10M5 17l1.5 1.5L5 20M19 17l-1.5 1.5L19 20M12 11v6m-4-3h8"
				/>
			</svg>
		),
		items: [
			'Are you a software developer?',
			'Does your work entail the development of mobile and web applications?',
			'We offer legal advisory and contract drafting services for software licensing, software maintenance and mobile app development',
		],
	},
	{
		title: 'GENERAL SERVICES',
		icon: (
			<svg
				className="w-8 h-8 text-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 11v6m4-3H8m4-9V5m4 3H8M5 17h14M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
				/>
			</svg>
		),
		items: [
			'LIRS Tax Card Processing',
			'Tax Clearance Certificates',
			'CBN License',
			'DPR License',
			'BPP Registration',
			'Land Purchase Agreements and Contracts of Sale',
			'Hire Purchase Transactions',
			'Legal Opinion Writing/Legal Consultation',
		],
	},
	{
		title: 'FAMILY LAW',
		icon: (
			<svg
				className="w-8 h-8 text-teal"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M3 7h18M3 11h18M3 15h18M3 19h18"
				/>
			</svg>
		),
		items: [
			'Processing Marriage Certificates',
			'Judicial Separation and Divorce',
			'Child custody and Guardianship',
		],
	},
];

const OurServices = () => {
	return (
		<div id="services" className="bg-[#f8f8f8] py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col mb-6 items-start lg:items-center">
					<h2 className="text-3xl font-bold text-center mb-1 border-b-2 border-gold inline-block">
						Our Services
					</h2>
					<p>What we offer.</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
					{servicesData.map((service, index) => (
						<div
							key={index}
							className="p-6 bg-[#f8f8f8] rounded-lg shadow-lg"
						>
							<div className="flex items-center mb-4">
								{/* {service.icon} */}
								<h3 className="text-2xl font-bold text-teal ml-2">
									{service.title}
								</h3>
							</div>
							<ul className="list-disc list-inside text-lg text-primaryText">
								{service.items.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='mt-10 flex justify-center items-center'>
					<a
						target="_blank"
						href="https://forms.gle/D5Zf3JMrEYbquHKj7"
						className="bg-teal text-white py-3 px-6 rounded hover:bg-gold transition duration-300"
					>
						Book an Appointment
					</a>
				</div>
			</div>
		</div>
	);
};

export default OurServices;

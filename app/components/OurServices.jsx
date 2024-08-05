'use client';

import React from 'react';

const servicesData = [
	{
		title: 'EMPLOYMENT & LABOUR RELATIONS',
		image:
			'https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=600',
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
		image:
			'https://images.pexels.com/photos/7841506/pexels-photo-7841506.jpeg?auto=compress&cs=tinysrgb&w=600',
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
		image:
			'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
		items: [
			'Obtaining Probate',
			'Processing Letters of Administration',
			'Drafting of Wills/Codicil',
			'Lodging of Wills at the Probate Section of the High Court',
		],
	},
	{
		title: 'TECHNOLOGY',
		image:
			'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600',
		items: [
			'Are you a software developer?',
			'Does your work entail the development of mobile and web applications?',
			'We offer legal advisory and contract drafting services for software licensing, software maintenance and mobile app development',
		],
	},
	{
		title: 'GENERAL SERVICES',
		image:
			'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
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
		image:
			'https://images.pexels.com/photos/2305212/pexels-photo-2305212.jpeg?auto=compress&cs=tinysrgb&w=600',
		items: [
			'Processing Marriage Certificates',
			'Judicial Separation and Divorce',
			'Child custody and Guardianship',
		],
	},
];

const OurServices = () => {
	return (
		<div id="services" className="bg-[#ffff] py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col mb-6 items-start lg:items-center">
					<h2 className="text-3xl font-bold text-center mb-1 border-b-2 border-gold inline-block">
						Our Services
					</h2>
					<p>What we offer.</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
					{servicesData.map((service, index) => (
						<div key={index} className="group perspective">
							<div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
								<div
									className="w-full h-64 text-center backface-hidden bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold p-6 rounded-lg shadow-lg relative"
									style={{
										backgroundImage: `url(${service.image})`,
									}}
								>
									<div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
									<div className="relative z-10">
										{service.title}
									</div>
								</div>
								<div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-lg rotate-y-180 flex flex-col items-center justify-center">
									<ul className="list-disc list-inside text-lg text-primaryText">
										{service.items.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
				
			</div>
		</div>
	);
};

export default OurServices;

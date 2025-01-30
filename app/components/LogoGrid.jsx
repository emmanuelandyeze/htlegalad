'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const logos = [
	'/images/clients/1.png',
	'/images/clients/2.png',
	'/images/clients/3.png',
	'/images/clients/4.png',
	'/images/clients/5.png',
	'/images/clients/6.png',
	'/images/clients/7.png',
	'/images/clients/8.png',
	'/images/clients/9.png',
	'/images/clients/10.png',
	'/images/clients/11.png',
	'/images/clients/12.png',
	'/images/clients/13.png',
	'/images/clients/14.png',
	'/images/clients/15.png',
	'/images/clients/16.png',
	'/images/clients/17.png',
	'/images/clients/18.png',
];

const LogoGrid = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<div ref={ref} className="grid grid-cols-5 gap-8 p-6 items-center justify-center">
			{logos.map((src, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.7, delay: index * 0.3 }}
				>
					<Image
						src={src}
						alt="Company logo"
						width={120}
						height={60}
						className="object-contain"
					/>
				</motion.div>
			))}
		</div>
	);
};

export default LogoGrid;

// components/Footer.js
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer id="contact" className="bg-navy text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 flex flex-col gap-4 md:mb-0">
						<h3 className="text-xl font-bold mb-2">
							Contact Information
						</h3>
						<p>Address: Lagos, Ibadan</p>
						<p>
							Email:{' '}
							<a
								href="mailto:hilda@htlegaladvisory.in"
								className="underline"
							>
								Hilda@htlegaladvisory.in
							</a>
							,{' '}
							<a
								href="mailto:payments@htlegaladvisory.in"
								className="underline"
							>
								Payments@htlegaladvisory.in
							</a>
						</p>
						<p>
							Opening hours: Monday - Friday, 9am - 5:30pm
						</p>
					</div>
					<div className="flex space-x-6">
						<a
							href="https://facebook.com/htlegaladvisory"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400"
						>
							<FaFacebook size={24} />
						</a>
						<a
							href="https://mobile.twitter.com/HTLegal_S"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400"
						>
							<FaTwitter size={24} />
						</a>
						<a
							href="https://www.linkedin.com/company/h-t-legal/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400"
						>
							<FaLinkedin size={24} />
						</a>
						<a
							href="https://www.instagram.com/htlegal/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400"
						>
							<FaInstagram size={24} />
						</a>
					</div>
				</div>
				<div className="text-center mt-6">
					<p className="text-sm">
						&copy; 2024 HT Legal Advisory. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

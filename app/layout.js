import {
	Inter,
	Montserrat,
	Open_Sans,
	Roboto,
} from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Providers } from './providers';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });
const roboto = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});
const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'HT Legal Advisory',
	description: 'Top legal consulting firm in Lagos.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={(montserrat.className, 'scroll-smooth')}
			>
				<div className="bg-white min-h-screen">
					<Providers>
						<Navbar />
						{children}
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	);
}

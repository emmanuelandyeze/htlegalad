import {
	Inter,
	Montserrat,
	Open_Sans,
	Roboto,
} from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });
const roboto = Open_Sans({
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
			<body className={roboto.className}>
				<Navbar />
				<div className="bg-gradient-to-b from-navy via-gray-800 to-navy min-h-screen">
					{children}
				</div>
			</body>
		</html>
	);
}

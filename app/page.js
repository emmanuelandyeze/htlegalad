import Image from 'next/image';
import Clients from './components/Clients';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import HeroSection from './components/HeroSection';
import Advert from './components/Advert';
import Stats from './components/Stats';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Clients />
			<Advert />
			<AboutUs />
			<OurServices />
			<Stats />
		</div>
	);
}

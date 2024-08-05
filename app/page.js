import Image from 'next/image';
import Clients from './components/Clients';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import HeroSection from './components/HeroSection';
import Advert from './components/Advert';
import Stats from './components/Stats';
import Culture from './components/Culture';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Clients />
			<Advert />
			<AboutUs />
			<OurServices />
			<Culture />
			<Stats />
			<Testimonials />
			<Faq />
		</div>
	);
}

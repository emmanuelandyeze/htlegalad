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
import LegalSolutions from './components/LegalSolutions';
import InformationTechnology from './components/InformationTechnology';
import AdvisorySectors from './components/AdvisorySectors';
import Footer from './components/Footer';
import NicheServices from './components/NicheServices';
import Funding from './components/Funding';
import NonProfit from './components/NonProfit';
import Solutions from './components/Solutions';
import ProBonoSupport from './components/ProBonoSupport';
import Women from './components/Women';
import FAQ from './components/Faq';
import Assistance from './components/Assistance';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Clients />
			<Advert />
			<AboutUs />
			{/* <OurServices /> */}
			<Culture />
			<NicheServices />
			<AdvisorySectors />
			<InformationTechnology />
			<Funding />
			<LegalSolutions />
			<NonProfit />
			<Solutions />
			<Stats />
			<ProBonoSupport />
			<Women />
			
			
			<FAQ />
			<Assistance />
			<Testimonials />
			<Footer />
		</div>
	);
}

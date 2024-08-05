import Image from 'next/image';
import Clients from './components/Clients';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';

export default function Home() {
	return (
		<div>
			<div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center lg:justify-between h-[70vh] lg:h-[100vh] pt-40 lg:pt-28 lg:pb-10  p-4">
				<div className="flex lg:hidden p-2 absolute bottom-40 justify-center">
					<Image
						src="/images/justice3.png"
						alt="Legal Services"
						width={400}
						height={300}
						className="opacity-30"
					/>
				</div>
				<div className="text-left z-20 flex flex-col justify-between items-start lg:text-left lg:border-t-2 lg:mt-10 lg:border-t-gold max-w-xl pt-0 pb-0 lg:py-10 lg:mr-10 mb-8">
					<h1 className=" text-4xl text-navy lg:text-5xl leading-[3rem] lg:leading-[3.5rem] font-semibold mb-4 lg:mb-8">
						Accessible and Cost Effective Legal Services for
						All
					</h1>
					<p className="text-lg z-10 text-slate-600 mb-8 lg:mb-10">
						At HT Legal, we are dedicated to understanding
						the uniqueness of existing as well as potential
						clients and this helps us to tailor our work to
						their distinctive needs.
					</p>
					<a
						target="_blank"
						href="https://forms.gle/D5Zf3JMrEYbquHKj7"
						className="bg-teal text-white py-3 px-6 rounded hover:bg-gold transition duration-300"
					>
						Book an Appointment
					</a>
				</div>
				<div className="hidden lg:flex p-2 border-b-2 border-b-gold justify-center">
					<Image
						src="/images/justice3.png"
						alt="Legal Services"
						width={460}
						height={300}
						className="opacity-70"
					/>
				</div>
			</div>
			<Clients />
			<AboutUs />
			<OurServices />
		</div>
	);
}

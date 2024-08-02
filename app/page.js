import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center lg:justify-between pt-96 lg:pt-20  p-4">
				<div className="flex lg:hidden p-2 absolute top-20 justify-center">
					<Image
						src="/images/justice3.png"
						alt="Legal Services"
						width={400}
						height={300}
						className="opacity-20"
					/>
				</div>
				<div className="text-left z-20 flex flex-col justify-between items-start  lg:text-left lg:border-t-2 max-w-xl pt-0 pb-0 lg:py-10 lg:mr-10 mb-8">
					<h1 className=" text-4xl text-secondaryText lg:text-5xl leading-[2.8rem] lg:leading-[3.5rem] font-semibold mb-4 lg:mb-8">
						Accessible and Cost Effective Legal Services for
						All
					</h1>
					<p className="text-lg z-10 text-primaryText mb-8 lg:mb-10">
						At HT Legal, we are dedicated to understanding
						the uniqueness of existing as well as potential
						clients and this helps us to tailor our work to
						their distinctive needs.
					</p>
					<a
						href="/appointment"
						className="bg-teal text-white py-3 px-6 rounded hover:bg-gold transition duration-300"
					>
						Book an Appointment
					</a>
				</div>
				<div className="hidden lg:flex p-2 border-b-2 justify-center">
					<Image
						src="/images/justice3.png"
						alt="Legal Services"
						width={460}
						height={300}
						className="opacity-70"
					/>
				</div>
			</div>
			<div className="bg-white"></div>
		</div>
	);
}

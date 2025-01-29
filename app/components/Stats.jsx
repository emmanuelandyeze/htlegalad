// components/Stats.js
import Image from 'next/image';

export default function Stats() {
	return (
		<div className="relative w-full py-10">
			<Image
				src="/images/stats.jpeg"
				alt="Background"
				layout="fill"
				objectFit="cover"
				className="absolute z-0"
			/>
			<div className="absolute inset-0 bg-black opacity-10 z-0"></div>
			<div className="max-w-xl mx-auto relative text-center items-center justify-center">
				<h2 className="text-[40px]  text-white font-bold  z-40 text-center mb-2  border-b-2 border-gold inline-block">
					Client Map
				</h2>
			</div>
			<div className="relative z-10 max-w-xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center h-full p-4 space-y-4">
				<div className="bg-transparent border flex flex-col justify-center items-center text-white h-40 w-40 border-white rounded-lg p-4 text-center">
					<h2 className="text-md">West Africa</h2>
					<p className="text-5xl font-semibold">+80%</p>
				</div>
				<div className="bg-transparent border flex flex-col justify-center items-center text-white h-40 w-40 border-white rounded-lg p-4 text-center">
					<h2 className="text-md">North America</h2>
					<p className="text-5xl font-semibold">+8%</p>
				</div>
				<div className="bg-transparent border flex flex-col justify-center items-center text-white h-40 w-40 border-white rounded-lg p-4 text-center">
					<h2 className="text-md">Europe</h2>
					<p className="text-5xl font-semibold">+6%</p>
				</div>
				<div className="bg-transparent border flex flex-col justify-center items-center text-white h-40 w-40 border-white rounded-lg p-4 text-center">
					<h2 className="text-md">South Africa</h2>
					<p className="text-5xl font-semibold">+5%</p>
				</div>
				<div className="bg-transparent border flex flex-col justify-center items-center text-white h-40 w-40 border-white rounded-lg p-4 text-center">
					<h2 className="text-md">East Africa</h2>
					<p className="text-5xl font-semibold">+1%</p>
				</div>
			</div>
		</div>
	);
}

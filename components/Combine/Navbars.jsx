import Image from 'next/image';
import Button from '../Base/Button';
import Dropdown from '../Base/Dropdown';

const Navbars = () => {
	return (
		<div className='flex flex-col  h-[400px] lg:h-[600px] rounded-bl-[6rem] py-10 px-5 sm:py-10 sm:px-10 md:py-20 md:px-20 lg:px-44 bg-gradient-to-r from-[#FF8F70] to-[#FF3D54] '>
			<nav className='flex lg:flex-row justify-between'>
				<div className='flex flex-row'>
					<div className='w-[101] h-[40]'>
						<Image src='/images/logo.svg' width={101} height={40} />
					</div>
					<div className='hidden xl:flex mx-10 flex-row'>
						<Dropdown>Product</Dropdown>
						<Dropdown>Company</Dropdown>
						<Dropdown>Connect</Dropdown>
					</div>
				</div>

				<div className='hidden xl:flex flex-row'>
					<Button className='btn-transperant'>Login</Button>
					<Button className='btn-background'>Sign Up</Button>
				</div>
			</nav>
			<div className='flex justify-center pt-10 lg:pt-24'>
				<h1 className='text-white font-overpass font-semibold text-3xl lg:text-5xl xl:text-6xl'>
					A modern publishing platform
				</h1>
			</div>
			<div className='flex font-overpass justify-center pt-8'>
				<p className='text-base lg:text-xl text-gray-200'>
					Grow your audience and build you online brand
				</p>
			</div>
			<div className='flex flex-row justify-center pt-8 gap-2 lg:gap-4'>
				<Button className='btn-background'>start for free</Button>
				<Button className='btn-outlined'>Learn More</Button>
			</div>
		</div>
	);
};

export default Navbars;

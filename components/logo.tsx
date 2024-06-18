import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/'>
			<div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
				<Image
					src='/logo.png'
					alt='Logo'
					height={200}
					width={250}
					className='w-[7rem]'
				/>
				<p className='text-lg text-neutral-700'>Gym Pro</p>
			</div>
		</Link>
	);
};

export default Logo;

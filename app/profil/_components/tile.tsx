import Image from 'next/image';
import React from 'react';

type TilePropsType = {
	title: string;
	imgSrc: string;
	description: string;
};

const Tile = ({ title, imgSrc, description }: TilePropsType) => {
	return (
		<div className='flex flex-col justify-center items-center w-[18rem] sm:w-[25rem] sm:h-[20rem] border-2 text-center px-3 py-5 rounded-xl bg-navigation shadow-md cursor-pointer hover:scale-[1.05] transition-[0.3]'>
			<h2 className='text-lg sm:text-2xl'>{title}</h2>
			<Image
				src={imgSrc}
				width={344}
				height={313}
				alt=''
				className='w-[6rem] sm:w-[10rem]'
			/>
			<p className='text-sm sm:text-lg'>{description}</p>
		</div>
	);
};

export default Tile;

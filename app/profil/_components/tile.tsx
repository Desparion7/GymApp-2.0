import Image from 'next/image';
import React from 'react';

type TilePropsType = {
	title: string;
	imgSrc: string;
	description: string;
};

const Tile = ({ title, imgSrc, description }: TilePropsType) => {
	return (
		<div className='flex flex-col justify-center items-center border-2 max-w-[20%] text-center px-3 py-5 rounded-xl bg-navigation shadow-md cursor-pointer hover:scale-[1.05] transition-[0.3]'>
			<h2 className='text-2xl'>{title}</h2>
			<Image
				src={imgSrc}
				width={344}
				height={313}
				alt=''
				className='w-[10rem]'
			/>
			<p className='text-lg'>{description}</p>
		</div>
	);
};

export default Tile;

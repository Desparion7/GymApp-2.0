import { X } from 'lucide-react';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

type MobilePropsType = {
	setVisibleMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MobileNav = ({ setVisibleMobileMenu }: MobilePropsType) => {
	return (
		<div className='h-full w-full fixed top-0 bg-navigation p-6'>
			<div className='absolute right-[1rem]'>
				<X
					size={'30px'}
					onClick={() => {
						setVisibleMobileMenu(false);
					}}
				/>
			</div>
			<div className='flex flex-col gap-[1rem] mt-[3rem] text-2xl'>
				<Link href='/plany-treningowe'>Plany treningowe</Link>
				<Link href='/atlas'>Atlas ćwiczeń</Link>
			</div>
		</div>
	);
};

export default MobileNav;

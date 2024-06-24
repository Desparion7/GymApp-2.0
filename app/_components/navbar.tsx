'use client';
import { useState } from 'react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import MobileNav from './mobile-nav';

export const Navbar = ({ userId }: { userId: string | null }) => {
	const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
	return (
		<>
			<div className='flex top-0 w-full h-18 custom321:h-24 py-2 px-4 border-b shadow-sm bg-navigation items-center'>
				<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
					<Logo />
					<div className='space-x-4 sm:w-auto hidden sm:flex items-center justify-between w-full '>
						<Button size='sm' variant='ghost' asChild>
							<Link href='/plany-treningowe'>
								Plany treningowe
							</Link>
						</Button>
						<Button size='sm' variant='ghost' asChild>
							<Link href='/atlas'>Atlas ćwiczeń</Link>
						</Button>
						{!userId ? (
							<>
								<Button size='sm' variant='white' asChild>
									<Link href='/sign-in'>Zaloguj się</Link>
								</Button>
								<Button size='sm' asChild>
									<Link href='/sign-up'>Utwórz konto</Link>
								</Button>
							</>
						) : (
							<span className='ml-auto hidden sm:flex items-center gap-x-2'>
								<UserButton
									afterSignOutUrl='/'
									appearance={{
										elements: {
											avatarBox: {
												height: 30,
												width: 30,
											},
										},
									}}
								/>
							</span>
						)}
					</div>
					<div className='flex gap-3 sm:hidden'>
						{userId ? (
							<span className='ml-auto flex items-center gap-x-2'>
								<UserButton
									afterSignOutUrl='/'
									appearance={{
										elements: {
											avatarBox: {
												height: 30,
												width: 30,
											},
										},
									}}
								/>
							</span>
						) : (
							<span className='ml-auto flex items-center gap-x-2'>
								<Link href='/sign-in'>
									<User size={'30px'}></User>
								</Link>
							</span>
						)}
						<Menu
							size={'36px'}
							onClick={() => {
								console.log('ok');
								setVisibleMobileMenu(true);
							}}
						/>
					</div>
				</div>
			</div>
			{visibleMobileMenu && (
				<MobileNav setVisibleMobileMenu={setVisibleMobileMenu} />
			)}
		</>
	);
};

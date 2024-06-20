import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

export const Navbar = () => {
	const { userId }: { userId: string | null } = auth();
	return (
		<div className='fixed top-0 w-full h-18 custom321:h-24 py-2 px-4 border-b shadow-sm bg-navigation flex items-center'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<Logo />
				<div className='space-x-4 sm:w-auto hidden sm:flex items-center justify-between w-full '>
					<Button size='sm' variant='ghost' asChild>
						<Link href='/plany-treningowe'>Training plans</Link>
					</Button>
					<Button size='sm' variant='ghost' asChild>
						<Link href='/atlas'>Exercise atlas</Link>
					</Button>
					{!userId ? (
						<>
							<Button size='sm' variant='outline' asChild>
								<Link href='/sign-in'>Sign in</Link>
							</Button>
							<Button size='sm' asChild>
								<Link href='/sign-up'>Create an account</Link>
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
					<Menu size={'36px'}/>
					{userId && (
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
					)}
				</div>
			</div>
		</div>
	);
};

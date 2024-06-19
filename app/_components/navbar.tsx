import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export const Navbar = () => {
	return (
		<div className='fixed top-0 w-full h-16 custom321:h-24 px-4 border-b shadow-sm bg-navigation flex items-center'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<Logo />
				<div className='space-x-4 md:block md:w-auto hidden sm:flex items-center justify-between w-full '>
					<Button size='sm' variant='ghost' asChild>
						<Link href='/plany-treningowe'>Plany treningowe</Link>
					</Button>
					<Button size='sm' variant='ghost' asChild>
						<Link href='/atlas'>Atlas ćwiczeń</Link>
					</Button>
					<Button size='sm' variant='outline' asChild>
						<Link href='/sign-in'>Zaloguj się</Link>
					</Button>
					<Button size='sm' asChild>
						<Link href='/sign-up'>Utwórz konto</Link>
					</Button>
				</div>
				<Menu size={'36px'} className='sm:hidden'/>
			</div>
		</div>
	);
};

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export const Footer = () => {
	return (
		<div className='fixed bottom-0 w-full p-4 border-t bg-navigation'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<div className='hidden sm:flex'>
					<Logo />
				</div>
				<p className='text-[12px] font-semibold'>GYM PRO</p>
				<p className='text-[12px]'>Aplikacja to zarządzania treningiem</p>
				{/* 
				<div className='gap-x-2 md:block md:w-auto flex flex-col items-center justify-between w-full'>
					<Button size='sm' variant='ghost'>
						Polityka prywatności
					</Button>
					<Button size='sm' variant='ghost'>
						Warunki korzystania
					</Button>
				</div> */}
			</div>
		</div>
	);
};

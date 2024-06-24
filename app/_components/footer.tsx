import Logo from '@/components/logo';

export const Footer = () => {
	return (
		<div className='flex bottom-0 w-full p-4 border-t bg-navigation'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<div className='hidden sm:flex'>
					<Logo />
				</div>
				<p className='text-[12px] font-semibold'>GYM PRO</p>
				<p className='text-[12px]'>
					Aplikcaja do zarządzania treningiem
				</p>
			</div>
		</div>
	);
};

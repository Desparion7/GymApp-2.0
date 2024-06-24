import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Medal } from 'lucide-react';

export default function Home() {
	return (
		<main className='flex min-h-[90vh] flex-col items-center justify-center p-2'>
			<div className='mb-2 sm:mb-4 flex flex-col sm:flex-row items-center text-center border shadow-sm p-4 pb-6 custom321:p-4  sm:p-6 bg-steel-gradient2 text-black/90 rounded-full sm:uppercase'>
				<Medal className='h-6 w-6 mr-2' />
				Numer jeden wśród  aplikacji na siłownie
			</div>
			<h1 className='custom321:text-xl sm:text-3xl text-center uppercase mb-5 flex flex-col gap-y-2 items-center'>
				Gym Pro Twój personalny asystent
				<span>do zarządzania treningiem.</span>
			</h1>
			<p className='custom321:text-xl text-center'>
				&quot;Nie bądź zwykły, bądz najlepszą wersją siebie- doskonal swoją formę i zdrowię z naszą aplikacją&quot;
			</p>
			<div className='flex flex-col gap-3 custom321:gap-5 mt-5'>
				<Button size='sm' variant='white' asChild>
					<Link href='/sign-up'>Zacznij</Link>
				</Button>
				<Button size='sm' asChild>
					<Link href='/aplikacja'>Dowiedz się więcej</Link>
				</Button>
			</div>
		</main>
	);
}

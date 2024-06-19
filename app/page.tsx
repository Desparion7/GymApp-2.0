import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Medal } from 'lucide-react';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<div className='mb-2 sm:mb-4 flex items-center border shadow-sm p-2 custom321:p-4 bg-steel-gradient2 text-black/90 rounded-full uppercase'>
				<Medal className='h-6 w-6 mr-2' />
				Numer 1 wśród aplikacji
			</div>
			<h1 className='custom321:text-xl sm:text-3xl text-center uppercase mb-5 flex flex-col gap-y-2 items-center'>
				Gym Pro Twoja personalny asystent
				<span>do zarządzania treningiem.</span>
			</h1>
			<p className='custom321:text-xl text-center'>
				&quot;Nie bądź zwykły, bądź najlepszy - doskonal swoją formę i
				zdrowie z naszą aplikacją. &quot;
			</p>
			<div className='flex flex-col gap-3 custom321:gap-5 mt-5'>
				<Button size='sm' variant='outline' asChild>
					<Link href='/sign-up'>Rozpocznij</Link>
				</Button>
				<Button size='sm' asChild>
					<Link href='/aplikacja'>Dowiedz się więcej</Link>
				</Button>
			</div>
		</main>
	);
}

import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TrainningPlans = () => {
	return (
		<section className='text-black min-h-[82vh] fle flex-col justify-center items-center text-center mt-10 mb-10 max-w-5xl px-2'>
			<h1 className='text-start sm:text-center text-2xl sm:text-3xl uppercase'>
				Przykładowe plany treningowe
			</h1>
			<p className='mt-[1rem] text-lg sm:text-2xl text-start'>
				Poniżej prezentujemy przykładowe plany treningowe, jakie możesz
				zastosować.
			</p>
			<p className='mt-[0.5rem] text-start'>
				Pamiętaj, że dane zestawy posiadają powtórzenia, serie oraz
				obciążenie nieprzystosowane do Ciebie. Wczytując dany zestaw
				treningowy należy dostosować dane parametry do swojego poziomu
				zaawansowania. Załadowane treningi można dowolnie modyfikować.
				Pamiętaj, jednak żeby nie przetrenowywać zbyt intensywnie jedne
				partie mięsniowe kosztem innych.
			</p>
			<div className='flex flex-col lg:flex-row gap-y-3 gap-x-5 mt-[2rem] text-xl w-full'>
				<div className='flex flex-col gap-y-3 lg:w-1/2'>
					<Link href='/plany-treningowe/zestaw-1'>
						<Button
							className='flex gap-2 items-center justify-between w-full p-2 px-4'
							variant='white'
							size='lg'
						>
							<p className='sm:text-lg'>
								Zestaw ogólnorozwojowy numer 1
							</p>
							<ArrowBigRight color='black' size='30px' />
						</Button>
					</Link>
					<Link href='/plany-treningowe/zestaw-2'>
						<Button
							className='flex gap-2 items-center justify-between w-full p-2 px-4'
							variant='white'
							size='lg'
						>
							<p className='sm:text-lg'>
								Zestaw ogólnorozwojowy numer 2
							</p>
							<ArrowBigRight color='black' size='30px' />
						</Button>
					</Link>
					<Link href='/plany-treningowe/zestaw-3'>
						<Button
							className='flex gap-2 items-center justify-between w-full p-2 px-4'
							variant='white'
							size='lg'
						>
							<p className='sm:text-lg'>
								Zestaw ogólnorozwojowy numer 3
							</p>
							<ArrowBigRight color='black' size='30px' />
						</Button>
					</Link>
				</div>
				<div className='flex flex-col gap-y-3 lg:w-1/2'>
					<Link href='/plany-treningowe/zestaw-klatka-piersiowa-triceps'>
						<Button
							className='flex gap-2 items-center justify-between w-full p-2 px-4'
							variant='white'
							size='lg'
						>
							<p className='sm:text-lg'>
								Zestaw klatka piersiowa i triceps
							</p>
							<ArrowBigRight color='black' size='30px' />
						</Button>
					</Link>
					<Link href='/plany-treningowe/zestaw-plecy-barki'>
						<Button
							className='flex gap-2 items-center justify-between w-full p-2 px-4'
							variant='white'
							size='lg'
						>
							<p className='sm:text-lg'>Zestaw plecy i barki</p>
							<ArrowBigRight color='black' size='30px' />
						</Button>
					</Link>
					<Link href='/plany-treningowe/zestaw-nogi-biceps'>
						<Button
							className='flex gap-2 items-center justify-between w-full p-2 px-4'
							variant='white'
							size='lg'
						>
							<p className='sm:text-lg'>Zestaw nogi i biceps</p>
							<ArrowBigRight color='black' size='30px' />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TrainningPlans;

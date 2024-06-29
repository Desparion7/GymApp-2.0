import LoadingSpinner from '@/components/loading-spinner';
import { getUserTrainingSets } from '@/server/training-set'; 
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { TrainingSetType } from '@/types/training-set-types';

async function MyPlansScreen({ userId }: { userId: string }) {
	const trainingSets:TrainingSetType[] | { error: string; } = await getUserTrainingSets(userId);

	return (
		<>
			{trainingSets}
			<section className='text-black text-4xl min-h-[82vh] fle flex-col justify-center items-center text-center mt-10 mb-10'>
				<h1 className='text-2xl sm:text-4xl'>Moje zestawy ćwiczeń</h1>
				<div className='flex justify-center mt-[2rem] gap-[1rem]'>
					{trainingSets?.map((training) => (
						<div key={training.} className='flex flex-col justify-center items-center border-2 p-5 rounded-xl bg-navigation shadow-md'>
							<h2 className='text-xl mb-[1.5rem]'>
								Zestaw poniedziałek długa
							</h2>
							<div className='flex justify-center gap-5'>
								<button className='hover:scale-110 transition-[0.3]'>
									<Image
										src='/start.png'
										width={344}
										height={313}
										alt=''
										className='w-[3rem] '
									/>
									<p className='text-sm'>Start</p>
								</button>
								<button className='hover:scale-110 transition-[0.3]'>
									<Image
										src='/edit.png'
										width={299}
										height={293}
										alt=''
										className='w-[3rem] '
									/>
									<p className='text-sm'>Edytuj</p>
								</button>
								<button className='hover:scale-110 transition-[0.3]'>
									<Image
										src='/trash.png'
										width={347}
										height={326}
										alt=''
										className='w-[3rem] '
									/>
									<p className='text-sm'>Usuń</p>
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

const Page = () => {
	const { userId } = auth();

	if (!userId) {
		redirect('/');
	}
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<MyPlansScreen userId={userId} />
		</Suspense>
	);
};

export default Page;

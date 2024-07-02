import LoadingSpinner from '@/components/loading-spinner';
import { getUserTrainingSets } from '@/server/actions/training-set';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { TrainingSetType } from '@/types/training-set-types';
import AddNewTrainingSetBtn from './_components/add-new-training-set-btn';

async function MyPlansScreen({ userId }: { userId: string }) {
	const trainingSets: TrainingSetType[] | null = await getUserTrainingSets(
		userId
	);
	if (!trainingSets) {
		return (
			<h1 className='text-xl text-red-500'>
				Wystąpił problem z pobraniem zestawów ćwiczeń.
			</h1>
		);
	}
	return (
		<>
			{trainingSets.length > 0 ? (
				<>
					<h1 className='text-2xl sm:text-4xl'>
						Moje zestawy ćwiczeń
					</h1>
					<div className='flex flex-wrap justify-center mt-[2rem] gap-[1rem]'>
						{trainingSets?.map((training) => (
							<div
								key={training._id}
								className='flex flex-col justify-center items-center border-2 p-5 rounded-xl bg-navigation shadow-md'
							>
								<h2 className='text-xl mb-[1.5rem]'>
									{training.trainingName}
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
						<AddNewTrainingSetBtn userId={userId} />
					</div>
				</>
			) : (
				<p>
					Nie utworzyłeś jeszcze żadnego zestawu ćwiczeń. Możesz
					skorzystać z zestawów przygotowanych przez nas
				</p>
			)}
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
			<section className='text-black text-4xl min-h-[80vh] fle flex-col justify-center items-center text-center mt-10 mb-10'>
				<MyPlansScreen userId={userId} />
			</section>
		</Suspense>
	);
};

export default Page;

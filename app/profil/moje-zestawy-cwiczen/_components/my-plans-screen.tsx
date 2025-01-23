'use client';
import { useQuery } from '@tanstack/react-query';
import { getUserTrainingSets } from '@/server/actions/training-set';
import Image from 'next/image';
import { TrainingSetType } from '@/types/training-set-types';
import DeleteTrainingSetBtn from './delete-training-set-btn';
import AddNewTrainingSetBtn from './add-new-training-set-btn';

function MyPlansScreen({ sets, userId }: { sets: any; userId: string }) {
	const { data: trainingSets } = useQuery({
		queryKey: ['sets'],
		queryFn: () => {
			return getUserTrainingSets(userId);
		},
		initialData: sets,
	});

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
						{trainingSets?.map((training: TrainingSetType) => (
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
									<DeleteTrainingSetBtn
										trainingId={training._id}
									/>
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

export default MyPlansScreen;

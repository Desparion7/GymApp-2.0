import React, { Suspense } from 'react';
import { getExampleTrainingByPath } from '@/server/example-trainings';
import LoadingSpinner from '@/components/loading-spinner';
import { ExampleTrainingType } from '@/types/example-training-types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';

async function ExampleTraining({ trainingPath }: { trainingPath: string }) {
	const exampleTrainingDetails: ExampleTrainingType =
		await getExampleTrainingByPath(trainingPath);

	return (
		<section className='text-black min-h-[82vh] flex flex-col justify-center items-center text-center mt-10 mb-10 max-w-5xl w-full'>
			{exampleTrainingDetails ? (
				<>
					<h1 className='text-2xl sm:text-3xl uppercase'>
						{exampleTrainingDetails?.trainingName}
					</h1>
					<Button className='my-4'>Rozpocznij trening</Button>
					{exampleTrainingDetails?.exercise.map((exercise, index) => (
						<div className='w-full' key={index}>
							<h2 className='bg-navigation w-full border-2 rounded-md text-md text-start p-2 font-semibold'>{`Ćwiczenie ${
								index + 1
							}`}</h2>
							{exercise.map((seria, seriesIndex) => (
								<div
									className='flex justify-between p-2 border-2 my-2 bg-white'
									key={seriesIndex}
								>
									{seria.url ? (
										<Link href={`/atlas/${seria.url}`}>
											<div className='flex gap-2'>
												{seria.name}{' '}
												<ArrowBigRight
													color='black'
													size='25px'
												/>
											</div>
										</Link>
									) : (
										<div>{seria.name}</div>
									)}
									{!seria.time && (
										<div>{`Powtórzenia: ${seria.repeat}`}</div>
									)}
									{seria.time && (
										<div>{`Czas w min: ${seria.repeat}`}</div>
									)}
								</div>
							))}
						</div>
					))}
				</>
			) : (
				<>
					<p className='text-xl'>
						Wystąpił problem z pobraniem danych treningu.
					</p>
				</>
			)}
		</section>
	);
}
const Page = ({ params }: { params: { trainingName: string } }) => {
	const { trainingName } = params;

	return (
		<Suspense fallback={<LoadingSpinner />}>
			<ExampleTraining trainingPath={trainingName} />
		</Suspense>
	);
};

export default Page;

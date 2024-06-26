import React, { Suspense } from 'react';
import { getExampleTrainingByPath } from '@/server/get-data';
import LoadingSpinner from '@/components/loading-spinner';
import { ExampleTrainingType } from '@/types/example-training-types';
import Link from 'next/link';

async function ExampleTraining({ trainingPath }: { trainingPath: string }) {
	const exampleTrainingDetails: ExampleTrainingType =
		await getExampleTrainingByPath(trainingPath);

	return (
		<section className='text-black min-h-[82vh] flex flex-col justify-center items-center text-center mt-10 mb-10 max-w-5xl'>
			{exampleTrainingDetails ? (
				<>
					<h1>{exampleTrainingDetails?.trainingName}</h1>
					{exampleTrainingDetails?.exercise.map((exercise, index) => (
						<div className='' key={index}>
							<h3>{`Ćwiczenie ${index + 1}`}</h3>
							{exercise.map((seria, seriesIndex) => (
								<div className='' key={seriesIndex}>
									{seria.url ? (
										<Link href={`/atlas/${seria.url}`}>
											<div>{seria.name} ➡</div>
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
					<p className='text-xl'>Wystąpił problem z pobraniem danych treningu.</p>
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

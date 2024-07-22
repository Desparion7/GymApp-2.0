'use client';
import React from 'react';
import LoadingSpinner from '@/components/loading-spinner';
import { ExampleTrainingType } from '@/types/example-training-types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import axios from 'axios';

type FetchTrainingSetsResponse = {
	exampleTraining?: ExampleTrainingType;
	error?: AxiosError;
};

const fetchTrainingSets = async (
	trainingName: string
): Promise<FetchTrainingSetsResponse> => {
	const { data } = await axios.get(`/api/training/`, {
		params: { trainingName },
	});
	return data;
};

function ExampleTraining({ params }: { params: { trainingName: string } }) {
	const { trainingName } = params;
	const { data, isLoading, error } = useQuery({
		queryKey: ['example-training'],
		queryFn: () => {
			return fetchTrainingSets(trainingName);
		},
	});

	return (
		<section className='text-black min-h-[82vh] flex flex-col justify-start items-center text-center mt-10 mb-10 max-w-5xl w-full'>
			{isLoading && <LoadingSpinner />}
			{error  && (
				<>
					{error.response.data.message }
					<p className='text-xl text-red-500 flex flex-start'>
						Wystąpił problem z pobraniem danych treningu.
					</p>
				</>
			)}
			{data?.exampleTraining && (
				<>
					<h1 className='text-2xl sm:text-3xl uppercase'>
						{data?.exampleTraining?.trainingName}
					</h1>
					<Button className='my-4'>Rozpocznij trening</Button>
					{data?.exampleTraining?.exercise.map((exercise, index) => (
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
			)}
		</section>
	);
}
// const Page = ({ params }: { params: { trainingName: string } }) => {
// 	const { trainingName } = params;

// 	return (
// 		<Suspense fallback={<LoadingSpinner />}>
// 			<ExampleTraining trainingPath={trainingName} />
// 		</Suspense>
// 	);
// };

export default ExampleTraining;

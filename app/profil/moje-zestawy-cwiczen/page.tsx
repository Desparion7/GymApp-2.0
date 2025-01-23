'use client';

import { TrainingSetType } from '@/types/training-set-types';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import MyPlansScreen from './_components/my-plans-screen';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/loading-spinner';
import { AxiosError } from 'axios';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type FetchUserTrainingSetsResponse = {
	trainingSets?: TrainingSetType[];
	error?: AxiosError;
};

const fetchUserTrainingSets = async (
	userId: string
): Promise<FetchUserTrainingSetsResponse> => {
	try {
		const { data } = await axios.get('/api/my-training-sets', {
			params: { userId },
		});
		return data;
	} catch (error) {
		console.error('Error fetching training sets:', error);
		throw error;
	}
};

const Page = () => {
	const { user } = useUser();
	const userId = user?.id;
	if (!userId) {
		redirect('/');
	}

	// if server actions
	// const sets = await getUserTrainingSets(userId);
	// if API

	const useFetchUserTrainingSets = (userId: string) => {
		return useQuery({
			queryKey: ['trainingSets', userId],
			queryFn: () => fetchUserTrainingSets(userId),
			staleTime: 1000 * 60 * 5, // 5 minutes
		});
	};

	const { data, isLoading, error } = useFetchUserTrainingSets(userId);

	console.log(data?.trainingSets);
	return (
		<div>
			<section className='text-black text-4xl min-h-[80vh] fle flex-col justify-center items-center text-center mt-10 mb-10'>
				<Suspense fallback={<LoadingSpinner />}>
					<MyPlansScreen sets={data?.trainingSets} userId={userId} />
				</Suspense>
			</section>
		</div>
	);
};

export default Page;

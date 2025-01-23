'use client';

import { deleteTrainingSet } from '@/server/actions/training-set';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const DeleteTrainingSetBtn = ({ trainingId }: { trainingId: string }) => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['sets'],
		mutationFn: async (trainingId: string) => deleteTrainingSet(trainingId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['sets'] });
		},
		onError: (error) => {
			console.log(error);
			toast.error('Coś poszło nie tak!');
		},
	});
	return (
		<button
			className='hover:scale-110 transition-[0.3]'
			onClick={() => {
				mutate(trainingId);
			}}
		>
			<Image
				src='/trash.png'
				width={347}
				height={326}
				alt=''
				className='w-[3rem] '
			/>
			<p className='text-sm'>Usuń</p>
		</button>
	);
};

export default DeleteTrainingSetBtn;

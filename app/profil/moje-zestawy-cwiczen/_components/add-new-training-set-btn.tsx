'use client';
import { useMutation } from '@tanstack/react-query';
import { createNewTrainingSet } from '@/server/actions/training-set';

import { useRouter } from 'next/navigation';

const AddNewTrainingSetBtn = ({ userId }: { userId: string }) => {
	const router = useRouter();
	const { mutate, isPending } = useMutation({
		mutationKey: ['sets'],
		mutationFn: async (userId: string) => createNewTrainingSet(userId),
		onSuccess: (data) => {
			router.push(`/profil/moje-plany-treningowe/${data._id}`, {
				scroll: false,
			});
		},
		onError: () => {},
	});

	return (
		<div className='flex flex-col justify-center items-center border-2 p-5 rounded-xl bg-navigation shadow-md'>
			<button
				onClick={() => {
					mutate(userId);
				}}
			>
				{isPending ? '...' : '+'}
			</button>
		</div>
	);
};

export default AddNewTrainingSetBtn;

'use client';

import { deleteTrainingSet } from '@/server/actions/training-set';
import Image from 'next/image';

const DeleteTrainingSetBtn = ({ trainingId }: { trainingId: string }) => {
	return (
		<button
			className='hover:scale-110 transition-[0.3]'
			onClick={() => {
				deleteTrainingSet(trainingId);
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

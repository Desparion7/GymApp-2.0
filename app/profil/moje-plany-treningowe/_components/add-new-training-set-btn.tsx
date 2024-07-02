'use client';

import { createNewTrainingSet } from '@/server/actions/training-set';

const AddNewTrainingSetBtn = ({ userId }: { userId: string }) => {
	return (
		<div className='flex flex-col justify-center items-center border-2 p-5 rounded-xl bg-navigation shadow-md'>
			<button
				onClick={() => {
					createNewTrainingSet(userId);
				}}
			>
				+
			</button>
		</div>
	);
};

export default AddNewTrainingSetBtn;

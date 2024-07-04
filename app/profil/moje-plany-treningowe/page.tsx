import { getUserTrainingSets } from '@/server/actions/training-set';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import MyPlansScreen from './_components/my-plans-screen';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/loading-spinner';

const Page = async () => {
	const { userId } = auth();

	if (!userId) {
		redirect('/');
	}
	const sets = await getUserTrainingSets(userId);

	return (
		<div>
			<section className='text-black text-4xl min-h-[80vh] fle flex-col justify-center items-center text-center mt-10 mb-10'>
				<Suspense fallback={<LoadingSpinner />}>
					<MyPlansScreen sets={sets} userId={userId} />
				</Suspense>
			</section>
		</div>
	);
};

export default Page;

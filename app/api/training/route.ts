import connectMongoDB from '@/server/dataBase/database';
import ExampleTraining from '@/server/models/example-training-model';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const { searchParams } = new URL(req.url as string);
	const trainingName = searchParams.get('trainingName');

	try {
		await connectMongoDB();
		const exampleTraining = await ExampleTraining.findOne({
			path: trainingName,
		});
		if (!exampleTraining) {
			return NextResponse.json(
				{ error: 'Nie udało się pobrać treningu' },
				{ status: 500 }
			);
		}
		return NextResponse.json({ exampleTraining });
	} catch (error) {
		console.log(error);
		return error;
	}
}

import connectMongoDB from '@/server/dataBase/database';
import TrainingSet from '@/server/models/treining-set-model';
// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
	const { searchParams } = new URL(req.url as string);
	const userId = searchParams.get('userId');

	if (!userId) {
		// return res.status(400).json({ error: 'User ID is required' });
		return NextResponse.json(
			{ error: 'ID użytkownika jest wymagane' },
			{ status: 500 }
		);
	}

	try {
		// Connect to MongoDB
		await connectMongoDB();

		// Fetch training sets from the database
		const trainingSets = await TrainingSet.find({ user: userId });

		// Validate training data
		if (!trainingSets || trainingSets.length === 0) {
			return NextResponse.json(
				{ error: 'Nie znaleziono treningu' },
				{ status: 404 }
			);
		}

		// Sort the training sets (assuming b - a sorts by descending order)
		trainingSets.sort((a, b) => b - a);

		// Return the sorted training sets
		return NextResponse.json({ trainingSets });
	} catch (error) {
		console.error('Błąd serwera:', error);
		return NextResponse.json(
			{ error: 'Wewnętrzny błąd serwera' },
			{ status: 500 }
		);
	}
}

'use server';
import connectMongoDB from '@/server/dataBase/database';
import TrainingSet from '@/server/models/treining-set-model';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { ObjectId } from 'mongodb';
// Get user all sets
export const getUserTrainingSets = async (userId: string | undefined) => {
	await connectMongoDB();
	// Fetch training from database
	const trainingsSets = await TrainingSet.find({
		user: userId,
	});
	// Validate training data
	if (!trainingsSets) {
		return null;
	}
	trainingsSets.sort((a, b) => b - a);

	// Return the entire training
	return trainingsSets;
};

// Create new set
export const createNewTrainingSet = async (userId: string | undefined) => {
	try {
		await connectMongoDB();

		const trainingSet = new TrainingSet({
			user: userId,
			exercise: [],
			trainingName: 'Nowy zestaw',
		});

		const createdNewTrainingSet = await trainingSet.save();
		// Return the entire training
		if (createdNewTrainingSet) {
			revalidatePath('/profil/moje-plany-treningowe');
		}
	} catch (error) {
		return new Error('Nie udało się utworzyć nowego treningu');
	}
};
export const deleteTrainingSet = async (trainingSetId:  string) => {
	const { userId }: { userId: string | null } = auth();
	try {
		await connectMongoDB();

		const deletedTrainingSet = await TrainingSet.deleteOne({
			_id: trainingSetId,
			user: userId,
		});

		if (deletedTrainingSet.deletedCount > 0) {
			revalidatePath('/profil/moje-plany-treningowe');
		} else {
			throw new Error(
				'Nie znaleziono treningu do usunięcia lub brak uprawnień.'
			);
		}
	} catch (error) {
		return new Error('Nie udało się usunąć treningu');
	}
};

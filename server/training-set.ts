import connectMongoDB from '@/dataBase/database';
import TrainingSet from '@/models/treining-set-model';

// Get user all sets
export const getUserTrainingSets = async (userId: string | undefined) => {
	try {
		
	} catch (error) {
		
	}
	await connectMongoDB();
	// Fetch training from database
	const trainingsSets = await TrainingSet.find({
		user: userId,
	});
	// Validate training data
	if (!trainingsSets) {
		return {
			error: 'Nie znaleziono żadnego zestawu',
		};
	}
	trainingsSets.sort((a, b) => b - a);

	// Return the entire training
	return trainingsSets;
};

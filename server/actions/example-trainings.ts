import connectMongoDB from '@/server/dataBase/database';
import ExampleTraining from '@/server/models/example-training-model';

export const getExampleTrainingByPath = async (exampleTrainingPath: string) => {
	await connectMongoDB();

	// Fetch training from database
	const exampleTraining = await ExampleTraining.findOne({
		path: exampleTrainingPath,
	});

	// Validate training data
	if (!exampleTraining) {
		return null;
	}

	// Return the entire training
	return exampleTraining;
};

export type ExampleTrainingExerciseType = {
	name: string;
	repeat: number;
	time: string;
	weight: number;
	url: string;
};
export type ExampleTrainingType = {
	exercise: ExampleTrainingExerciseType[][];
	trainingName: string;
	path: string;
};

export type TrainingSetTypeExerciseType = {
	name: string;
	repeat: number;
	time: string;
	weight: number;
	url: string;
};
export type TrainingSetType = {
	user: string;
	exercise: TrainingSetTypeExerciseType[][];
	trainingName: string;
};

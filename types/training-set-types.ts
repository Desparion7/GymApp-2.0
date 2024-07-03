export type TrainingSetTypeExerciseType = {
	name: string;
	repeat: number;
	time: string;
	weight: number;
	url: string;
};
export type TrainingSetType = {
	_id: string;
	user: string;
	exercise: TrainingSetTypeExerciseType[][];
	trainingName: string;
};

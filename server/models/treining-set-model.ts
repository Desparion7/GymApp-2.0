import mongoose from 'mongoose';
const { Schema } = mongoose;

const exerciseSchema = new Schema({
	name: { type: String, required: false },
	repeat: { type: Number, required: false },
	time: { type: String, required: false },
	weight: { type: Number, required: false },
	url: { type: String, required: false },
});

const TrainingSetSchema = new Schema({
	user: {
		type: String,
		required: true,
	},
	exercise: {
		type: [exerciseSchema],
		required: true,
	},
	trainingName: {
		type: String,
		required: true,
	},
});

const TrainingSet =
	mongoose.models.TrainingSet ||
	mongoose.model('TrainingSet', TrainingSetSchema);

export default TrainingSet;

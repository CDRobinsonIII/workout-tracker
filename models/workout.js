// Create workout model, include: 
// Name of workout = name
// Type of workout (resistance or cardio) = type
// Weight being used = weight
// Number of sets = sets
// Number of reps = reps
// Duration of exercise= duration
// Distance traveled if it is a cardio exercise = distance

// Your "last "(updated) workout" on the index.html will display current date with totals for:
// Duration
// Execercises performed
// Weight lifted
// Sets performed 
// Reps performed

// On the index.html you will be able to continue the current workout or start a new one.

const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    _id: mongoose.mongoose.Types.ObjectId,
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

module.exports = mongoose.model('Workout', workoutSchema);


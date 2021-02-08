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

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {   
            type: {type: String, required: true},
            name: {type: String, required: true},
            distance: {type: Number, required: true},
            duration: {type: Number, default: 0},
            weight: {type: Number, default: 0},
            sets: {type: Number, default: 0},
            reps: {type: Number, default: 0}
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


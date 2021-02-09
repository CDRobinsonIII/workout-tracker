// Enter routes here to perform CRUD operations with the MongoDB
// When the user starts the application they will be able to either CREATE a new workout or continue (GET) last workout.
const Workout = require("../models/Workout.js");

const router = require("express").Router();

// Create a new workout.
// This has to be done before you can add an exercise to it.
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

//Add an exercise to the last workout using the id for the last workout.
router.put("/api/workouts/:id", (req, res) => {

    // Define the workout id of the last workout so that you can update the exercise list in it.
    // The workout id was passed in the req.params object.
    const workoutIdToUpdate = req.params.id;
   
    // Find the workout to add the exercise to and then push the added exercise to the exercises array.
    // Setting new: true will return the udpated document otherwise it will return the original document.
    Workout.findByIdAndUpdate(
        workoutIdToUpdate,
        { $push: { exercises: req.body } },
        {
            new: true
        }
    )
        .then(updatedWorkoutData => {
            res.json(updatedWorkoutData)
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

// GET the data for the last workout to display on the home page. 
// Add the totalDuration field to the workout to diplay the total duration for all of the exercises performed for the last workout. 
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(lastWorkoutStats => {
            res.json(lastWorkoutStats)
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

// GET the data for the most recent 7 workouts to display on the stats page.
// Add the totalDuration field to each workout to diplay the total duration for all of the exercises performed for that particular workout. 
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .sort({ _id: -1 }).limit(7)
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

// Export the API routes. 
module.exports = router;

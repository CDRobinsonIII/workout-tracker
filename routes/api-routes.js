// Enter routes here to perform CRUD operations with the MongoDB
// User when they start the application will be able to
// Either CREATE a new workout or continue (GET) last workout.

// /api/workouts ==> POST new workout to MongoDB database

const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const mongoose = require('mongoose');

// Not sure if I need a if statment here for cardio versus resistance...
router.post('/api/workout' (req, res, next) => 
    if (req.body.type === "cardio") {
        const workout = new Product ({
            _id: new mongoose.Types.ObjectId(),
            type: req.body.type,
            name: req.body.name,
            distance: req.body.distance,
            duration: req.body.duration
        });
    }
    else {
        const workout = new Product ({
            _id: new mongoose.Types.ObjectId(),
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps
        });

    }
});

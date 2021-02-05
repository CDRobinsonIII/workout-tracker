// Enter routes here to access index.html, exercise.html, and stats.html

const router = require("express").Router();
const path = require("path");

// Home page
router.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Add exercise page
router.get("/exercise", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Workout stats page
router.get("/stats", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;

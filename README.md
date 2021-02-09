# Workout Tracker
![GitHub License](https://img.shields.io/badge/License-MIT-blue) 

## Description 
The mission of this project was to finish developing a Node.JS/MongodDB workout tracker application. The frontend of the application was provided. To finish the application I had to create the Node Express server.js file, connect to a MongoDB database using the mongoose package, create the workout model for the MongoDB database, and create the API routes for the various CRUD operations for the application. The application allows the user to enter the different exercises they perform for their workouts. The user can view their last workout on the home page and their workout duration and total weights lifted stats on the workout stats page. The workouts and exercises are stored in a MongoDB database using the MongoDB Atlas cloud platform. 

## Table of Contents
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Screenshots of the workout tracker application in use](#screenshots-of-the-workout-tracker-application-in-use)

## Technologies Used
<ul>
   <li>HTML/CSS/JavaScript</li>
   <li>jQuery</li> 
   <li>MongoDB</li> 
   <li>Mongoose</li>
   <li>MongoDB Atlas</li>
   <li>Express JS Server</li> 
   <li>Heroku</li>
</ul>

## Installation
To install the workout tracker application you will have to fork the repository and then clone the repository to your local machine. Once you CD into the directory of the workout tracker application you will need to install the express, mongoose, and morgan packages via the following command: 

```
NPM install
```

## Usage 

You have two options to run the workout tracker application. 
<ol>
   <li>If you fork the repository, after you install the required modules mentioned above, you will have to enter the following command line: 

   ```   
   NPM start
   ```
   
   Then go to your browser and enter this link: http://localhost:3000/</li> 
   <li>You can also visit the deployed application via the deployed Heroku link: https://workout-tracker-cdr.herokuapp.com/
   <p></p>
    Once you start the application, from the home page you can continue your last workout, start a new workout, or visit the workout dashboard.</li>
</ol>

## License
This project is licensed under the MIT license.

## Contributing
If you would like to contribute to this repository and help improve it, your contributions would be welcomed. Please contact me via my contact information provided below. 

## Tests
There are no built-in tests for the workout tracker application. You can test the application by creating different workouts and add different exercises to your workout. Then view the workout dashboard page to see charts displaying your workout durations and weight lifted for your 7 most recent workouts.

## Questions
If you have any questions about this README generator application or to report any issues with the application please email me at charlesdalerobinson@gmail.com.
<p></p>
Please visit my github page to review my other repositories: [CDRobinsonIII](https://github.com/CDRobinsonIII)

## Screenshots of the workout tracker application in use

![Here is a screenshot of the index page of the workout application.](/public/assets/images/screenshot-workout-tracker_01.jpg)

![Here is a screenshot of the exercise page of the workout application.](/public/assets/images/screenshot-workout-tracker_02.jpg)

![Here is a screenshot of the dashboard page of the workout application.](/public/assets/images/screenshot-workout-tracker_03_01.jpg)


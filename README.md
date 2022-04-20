# My-Social-Network-API

![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![EXPRESS.JS](https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=express&logoColor=61DAFB)
![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
## Description
an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

 ## Table Of Contents
  * [Description](#description)
  * [User Story](#user-story)
  * [This Weeks task](#this-weeks-task)
  * [Acceptance Criteria](#acceptance-criteria )
  * [Walkthrough Demo](#walkthrough-demo)
  * [Deployed Application Links](#deployed-application-links)
  * [Usage](#usage)
  * [Technologies Used](#technologies-used)
  * [Packages](#packages)
  * [Questions](#questions)
  * [License](#license)
  

## This weeks Task

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

Your Challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.

No seed data is provided, so you’ll need to create your own data using Insomnia after you’ve created your API.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.


## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Usage

To use this application:

* Clone the GitHub repository at:https://github.com/danielnels/My-Social-Network-API.git
Download and install node.js.

* To automatically install dependencies, run "npm i" 
* To seed the database, run "npm start seed"

Run the app
* Watch the demo 
* npm start or node /server.js [To start the server] and use http://localhost:3001/ with insomnia to update,delate and create. 

## Technologies Used

#### * Node.js
#### * MongoDB
#### * Insomnia
#### * Moment 



## Packages

#### * Package.json
#### * express
#### * MongoDB
#### * Mongoose
#### * Moment

    
## Walkthrough Demo



https://user-images.githubusercontent.com/94213022/164154488-ac07fe2f-947e-4727-b717-f65d24e48f19.mp4



## Deployed Application Links
https://github.com/danielnels/My-Social-Network-API.git

## Questions
  Please e-mail me if you have any questions about this App
  danieln@newground.net.au 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

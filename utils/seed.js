const connection = require('../config/connection');
const { Users, Thoughts} = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing 
  await Users.deleteMany({});

  // Drop existing 
  await Thoughts.deleteMany({});

  // Create empty array to hold the user
  const users = [
    {
      "username": "MarleyMae",
      "email": "mmae@gmail.com"
    }, 
    {
      "username": "JackA",
      "email": "jacka@gmail.com"
    }, 
    {
      "username": "KristenP",
      "email": "kristenp@gmail.com"
    }, 
    {
      "username": "DanielJ",
      "email": "dj@gmail.com"
    }
  ];

 
  const thoughts = [
    {
      "thoughtText": "Here's a thought...",
      "username": "MarleyMae",
    },   
    {
      "thoughtText": "I am a great BMX bandit",
      "username": "JackA",
    }, 
    {
      "thoughtText": "Can you really get burnt from the wind",
      "username": "KristenP",
    }, 
    { 
      "thoughtText": "I have almost finished building my flux capacitor",
      "username": "DanielJ",
    }
  ];

  // Add users to the collection 
  await Users.collection.insertMany(users);

  // Add thoughts to the collection 
  await Thoughts.collection.insertMany(thoughts);

  // seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});
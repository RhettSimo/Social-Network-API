const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const users = [
    {
      username: "Rhett",
      email: "rhett@email.com"
    },
    {
      username: "Jack",
      email: "jack@email.com"
    },
    {
      username: "Jeremy",
      email: "jeremy@email.com"
    },
  ];

  const thoughts = [
    {
      thoughtText: "Have a fantastic day!",
      username: "Rhett"
    },
    {
      thoughtText: "My favorite food is spaghetti.",
      username: "Jack"
    },
    {
      thoughtText: "Have you ever wondered why the sky is blue?",
      username: "Jeremy"
    }
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

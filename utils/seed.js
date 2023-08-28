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

  // seed thoughts

  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

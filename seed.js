const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model

// MongoDB URI (replace with your actual URI)
const mongoURI = 'mongodb://localhost:27017/graphql_example'; // Local MongoDB URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected for seeding data');

    // Create seed data
    const seedUsers = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' },
    ];

    // Iterate over each seed user and check if the email already exists
    for (const userData of seedUsers) {
      try {
        // Check if the user with the given email already exists in the database
        const existingUser = await User.findOne({ email: userData.email });

        if (existingUser) {
          console.log(`User with email ${userData.email} already exists. Skipping.`);
        } else {
          // If custom 'id' is being used, ensure it is not null and is unique
          if (!userData.id) {
            userData.id = new mongoose.Types.ObjectId(); // Generate a new unique ObjectId
          }

          // Create and save a new user if it does not exist
          const newUser = new User(userData);
          await newUser.save();
          console.log(`User ${userData.name} with email ${userData.email} created.`);
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }

    // Close the database connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB for seeding:', err);
  });

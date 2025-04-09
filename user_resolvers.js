// resolvers.js
const User = require('./models/User');

const resolvers = {
  Query: {
    // Get all users
    users: async () => {
      return await User.find();
    },
    // Get a specific user by ID
    user: async (_, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    // Create a new user
    createUser: async (_, { name, email }) => {
      try {
        const user = new User({ name, email });
        const savedUser = await user.save();

        return savedUser; // If saving is successful, return the user
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
      }
    },
    // Update an existing user
    updateUser: async (_, { id, name, email }) => {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      user.name = name || user.name;
      user.email = email || user.email;
      await user.save();
      return user;
    },
    // Delete a user
    deleteUser: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.remove();
      return true;
    },
  },
};

module.exports = resolvers;

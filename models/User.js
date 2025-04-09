// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeInstance'); // your Sequelize instance

// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false,
//   },
// });
const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  // 'name' is a required string field
  name: {
    type: String,
    required: true,
    trim: true,  // Trim whitespace from the name
  },
  
  // 'email' is a required string field and must be unique
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure email is unique
    lowercase: true,  // Ensure email is stored in lowercase
    trim: true,  // Trim whitespace from the email
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],  // Email validation regex
  },
  
  // 'createdAt' is a date field that defaults to the current date when the user is created
  createdAt: {
    type: Date,
    default: Date.now,  // Set default value to current date
  },

  // 'id' is a custom field (not necessary if you use _id)
  id: {
    type: String,
    unique: true, // Ensure 'id' is unique if you're using it instead of '_id'
  },
});

// Add additional methods to the schema if needed (for example, a method to display the user's full name)
userSchema.methods.getFullName = function() {
  return `${this.name}`;
};

// Create and export the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

/**
 * Mongoose Schema for MongoDB
 */
var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');

// File schema
exports.file = new mongoose.Schema({
  name: String,
  filetype: String,
  size: Number,
  path: String,
  lastAccessed: Date,
  lastModified: Date,
  keywords: [String],
  summary: String
}).plugin(mongoosastic);

// User schema
exports.user = new mongoose.Schema({
  fbId: {
    type: String,
    index: true
  },
  accessToken: String,
  name: {
    full: String,
    first: String,
    last: String
  },
  link: String,
  username: String,
  gender: String,
  email: String,
  timezone: String,
  locale: String,
  verified: Boolean,
  updatedTime: String
});
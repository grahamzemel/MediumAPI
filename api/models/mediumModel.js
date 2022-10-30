'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  name: {
    type: String,
    required: 'Enter article name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('Articles', ArticleSchema);
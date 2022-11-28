const mongoose = require("mongoose");


const issueModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    max: 200,

  },
  status:{
    type: String,
    enum: ["open", "pending", "closed"],
    default: "open",
    required: true,
    trim: true
  },
  state:[
    {
      type: {
        type: String,
        enum: ["open", "pending", "closed"],
        default: "open",
      },
      date: {
        type: Date,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
  ],



}, { timestamps: true })

const Issue = mongoose.model('Issue', issueModel)

module.exports = Issue;

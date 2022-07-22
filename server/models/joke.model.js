const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "setup required"],
    minLength: [10, "setup must be at least 10 characters long"],
  },

  punchline: {
    type: String,
    required: [true, "setup required"],
    minLength: [3, "setup must be at least 10 characters long"],
  },
});

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;

//controller queries the database
const Joke = require("../models/joke.model");
// /api/jokes           GET     Returns a list of all jokes
// /api/jokes/_id     GET     Returns the joke with matching id
// /api/jokes/random GET    Return a random joke
// /api/jokes/new       POST    Creates a new joke
//  /api/jokes/update/_id   PUT     Updates the joke with matching "_id"
//  /api/jokes/delete/_id   DELETE  Removes the joke with matching "_id"

module.exports.showAllJokes = (req, res) => {
  console.log("in show all jokes");
  Joke.find()
    .then((foundJokes) => {
      res.json({ results: foundJokes });
    })
    .catch((err) => {
      res.json({ message: "Ooops, what's happenening here?", error: err });
    });
};

module.exports.getJokeByID = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((foundJoke) => {
      res.json({ results: foundJoke });
    })
    .catch((err) => {
      res.json({ message: "Ooops, what's happenening here?", error: err });
    });
};

// module.exports.getRandom  = (req, res)=> {
//     Joke.({_id:req.params.id})
//         .then(foundJoke=>{
//             res.json({results: foundJoke})
//             })
//         .catch(err=>{
//             res.json({message: "Ooops, what's happenening here?", error: err})
//         })

// }

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => {
      res.json({ results: newJoke });
    })
    .catch((err) => {
      res.json({ message: "Ooops, what's happenening here?", error: err });
    });
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ results: updatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Ooops, what's happenening here?", error: err });
    });
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((deletedJoke) => {
      res.json({ results: deletedJoke });
    })
    .catch((err) => {
      res.json({ message: "Ooops, what's happenening here?", error: err });
    });
};

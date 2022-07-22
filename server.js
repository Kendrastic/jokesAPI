const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const app = express();

// to receive post requests use this and make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api", (req, resp) => {
  resp.json({ message: "Hello, world!!" });
});

require("./server/config/mongoose.config");

require("./server/routes/joke.routes")(app);

// Keep this below the other code blocks
app.listen(8000, () => console.log("The server is listening on port 8000"));

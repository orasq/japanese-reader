require("dotenv").config();

const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to database
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
mongoose.set("useFindAndModify", false);

app.use(bodyParser.json({ limit: "1mb" }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

//loading on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running on: ", PORT);
});

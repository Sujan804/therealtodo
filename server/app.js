// // imports modules & dependencies
// const express = require("express");
// const env = require("dotenv");
// var path = require("path");
// var cors = require("cors");

// // imports routes, middleware, and configs
// const todos = require("./src/routes/todos-route");
// const { notFoundRoute, errorHandler } = require("./src/configs/errorHandler");

// // loads environment variables from .env file
// env.config();

// // initializes express app
// const app = express();

// // application database connection establishment
// const connectDatabase = require("./src/db/connect");
// connectDatabase();

// // corss-origin-allow-all
// app.use(cors());

// app.use(express.static(path.join(__dirname, "public")));

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// // sets default route
// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Welcome to TODO Node.js application backend." });
// });

// // todos api routes
// app.use(process.env.APP_API_PREFIX, todos);

// // 404 - not found error handler
// app.use(notFoundRoute);

// // error handler
// // app.use(errorHandler);

// // app listens to defined port
// app.listen(process.env.PORT, () => {
//   console.log(process.env.PORT);
//   console.log("TODO-App backend server running on: " + process.env.PORT);
// });

const express = require("express");
const env = require("dotenv");
var path = require("path");
var cors = require("cors");
const todos = require("./src/routes/todos-route");
const { notFoundRoute, errorHandlers } = require("./src/configs/errorHandler");

env.config();
var cors = require('cors')
const app = express();
app.use(cors())
const connectDatabase = require("./src/db/connect");
connectDatabase();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (res, req) => {
  res.statusCode(200).json({
    message: "Welcome to Node.js Todo app backend",
  });
});

app.use("/api", todos);
app.use(notFoundRoute);
app.use(errorHandlers);
app.listen(process.env.PORT, () => {
  console.log("App is listening on port " + process.env.PORT);
});

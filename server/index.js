require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/auth-router");
// const contactRoute = require("./router/contact-router");
const connectDB = require("./db/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//       origin: "http://localhost:5173",
//       credentials: true
// }));

// mount the router: to use the in your main express app , you can 'mount' it at a specific url prefix

app.use(router);
// app.use(contactRoute);
app.use(errorMiddleware);

const PORT = 5800;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

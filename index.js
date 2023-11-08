import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import contactRoutes from "./routes/contact.js"
dotenv.config()
// import router from "./routes/routes.js";
// import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get('/', async (req, res) => {
    res.send({
      status: 'success',
      message: 'API TEST',
    });
});

app.use('/users', userRoutes)
app.use('/contact', contactRoutes)

app.use((req, res, next) => {
  next(error.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(process.env.APP_PORT, () => console.log(`Server started...`));
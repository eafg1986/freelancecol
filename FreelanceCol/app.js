import cors from "cors";
import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import { login } from "./modules/authModule.js";
import companyRouter from "./routes/companyRouter.js";
import userRouter from "./routes/userRouter.js";
import vacantRouter from "./routes/vacantRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("El servidor se esta ejecutando.");
});

mongoose.connect(
  "mongodb+srv://FreelanceCol:grupo5@freelancecol.pzdp53s.mongodb.net/Freelance-Col?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Conectado a DB.");
    }
  }
);

//Midleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/company", companyRouter);
app.use("/company/all", companyRouter);
app.use("/vacant", vacantRouter);
app.use("/vacant/all", vacantRouter);
app.use("/user", userRouter);
app.use("/login", login)

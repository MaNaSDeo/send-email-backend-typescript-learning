import dotenv from "dotenv";
import "express-async-errors";
import express, { Request, Response } from "express";
import { sendEmail } from "./controllers/sendEmail";

// error handler
import notFound from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";

dotenv.config();

const app = express();

// Router

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Email Project</h1> <a href='/send'>send email</a>");
});

app.get("/send", sendEmail);

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

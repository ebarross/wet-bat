import express, { Response } from "express";
import cors from "cors";
import morgan from "morgan";
import quoteController from "./controllers/quote-controller";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(
  morgan(
    '[:date[web]] ":method :url" :status :res[content-length] - :response-time ms'
  )
);

app.get("/", (req, res: Response) => {
  res.send("Wet Bat API");
});

app.use(quoteController);

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});

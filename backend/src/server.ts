import express, { Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res: Response) => {
  res.send("Wet Bat API");
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});

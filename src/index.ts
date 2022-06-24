import "dotenv";
import express from "express";
import { route } from "./routes";

const app = express();
app.use(express.json());

const { PORT } = process.env;
route(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
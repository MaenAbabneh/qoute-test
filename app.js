import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import connectDB from "./config/mongoose.js";
import quoteRouter from "./routes/qoute.js";

const app = express();

connectDB();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/quote", quoteRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
import express from "express";
const app = express();
import cors from "cors";
import { dataPage1, dataPage2 } from "./data.js";

const corsOptions = {
  origin: ["https://rk-telegram.netlify.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
};

console.log(dataPage2);
console.log(dataPage1);

app.use(express.json());

app.use(cors(corsOptions));

app.get("/api/get_all_chats", (req, res) => {
  const page = req.query.page || 1; // Get the page number from query params
  if (page == 1) {
    res.json(dataPage1);
  } else if (page == 2) {
    res.json(dataPage2);
  } else {
    res.status(404).json({ message: "Page not found" });
  }
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

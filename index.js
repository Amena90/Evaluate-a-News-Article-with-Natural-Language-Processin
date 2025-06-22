const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
  const text = req.body.text.slice(0, 200); // send first 200 chars to API

  res.json({
    sentiment: "Positive",
    subjectivity: "Subjective",
    preview: text,
  });
});

app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});




const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/go54", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

console.log(process.env.PORT);

app.get("/test", (req, res) => {
  return res.status(200).json({
    name: "ADEMOLA",
    success: "true",
    message: "Test Successful",
  });
});

app.listen(process.env.PORT, () => {
  console.log("SERVER LISTENING ON PORT: ", process.env.PORT);
});

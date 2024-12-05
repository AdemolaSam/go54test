const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/go54", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/test", (req, res) => {
  res.json({
    name: "ADEMOLA",
    success: "true",
    message: "Test Successful",
  });
});

app.listen(5000, () => {
  console.log("SERVER LISTENING ON PORT: ", 5000);
});
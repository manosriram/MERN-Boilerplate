const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ message: "Hey There! 😁" });
});

app.listen(Port, () => console.log(`Server at ${Port}`));

module.exports = app;

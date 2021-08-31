const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const postRouter = require("./routes/post");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/post", postRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

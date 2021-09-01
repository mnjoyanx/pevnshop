const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const postRouter = require("./routes/post");

app.use(express.static(path.resolve(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({}));

app.use("/post", postRouter);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

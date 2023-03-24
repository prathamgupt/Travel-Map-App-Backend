const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
var cors = require('cors');
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));
app.use("/pins", pinRoute);
app.use("/users", userRoute);
app.listen(8800, () => {
  console.log("Server Running");
});

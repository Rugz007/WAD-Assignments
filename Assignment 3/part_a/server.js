const express = require("express");
const app = express();
const path = require("path");
const indexRoutes = require("./routes/index");



//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
// app.set('view engine', 'html');
app.set("views", __dirname + "/views");




//routes
app.use("/" , indexRoutes)


//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

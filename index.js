const keys = require("./config/keys");
const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
mongoose.connect(keys.mongoURI);
require("./models/User"); // comes before require passport
require("./services/passport");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require("./routes/authRoutes");
authRoutes(app);
// require("./routes/authRoutes")(app) // same as the above 2 lines

const PORT = process.env.PORT || 5500;
app.listen(PORT);

const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripe_secret_key);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "User not logged in" });
    }

    const charge = await stripe.paymentIntents.charges.create({
      amount: 5 * 100,
      currency: "inr",
      description: "INR 5 for 5 credits",
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};

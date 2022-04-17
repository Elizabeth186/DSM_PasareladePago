import Stripe from "stripe";
import express from "express";
const PUBLISH_KEY = "pk_test_51KpEFrIf8DlQtP9ZWhcxGpQS3krrfkT2MuxnYAlK8Lw6ByVvKMufNFyo2E7LVEfnOz3xhsTP3BdUFSdwkvqkxYUR00GwT6K4Dw"
const PRIVATE_KEY ="sk_test_51KpEFrIf8DlQtP9Zw7BgQlRF6oJ7jNqvXcKbq1mWmyD8CQh3cRbbFh766wYIturW7QI2yv0ud1qbyy8iwiuA8iof00bZ7eUdpG"
const app = express();
const port = 4000;


//Confirm the API version from your stripe dashboard
const stripe = Stripe(PRIVATE_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
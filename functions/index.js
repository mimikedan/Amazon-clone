const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OO7tLEIuFq8O4hnYYenHVUvkgrXO82SiAyqKQ1yICPVMZSfswq3KB5Z3IvwJRGnTKUGA2xWNFxfxuPrdUMdrR7o00PPx8zjfk"
);

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(
    "Payment Request Recieved BOOM!!! for this amount >>> ",
    total,
    typeof total
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//  (http://127.0.0.1:5001/fir-f9efa/us-central1/api).

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

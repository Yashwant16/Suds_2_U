const express = require('express')
const app = express()
const stripe = require("stripe")('sk_test_51J60G0Kr8szE4qfQ3UM4nj5yWYFtMoWi7miqVDX37Q8vuLd5Ltnjeek96sAtCDE0d3aZZUHh4HnxszKnRhi05Ll400W8o6Ays6');
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
  res.send('Hello World from our server haha')
})

app.post('/payment-sheet', jsonParser, async (req, res) => {
  let { charge, customer_id } = req.body
  console.log(charge, customer_id)
  
  // If there is customer_id in the request that means the user is not new so use the retrive method
  const customer = customer_id ? await stripe.customers.retrieve(customer_id) : await stripe.customers.create()
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: charge,
    currency: 'usd',
    customer: customer.id,
  });
  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id
  });
});

app.listen(3000)




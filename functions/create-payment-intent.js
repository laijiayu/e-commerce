// domain/.netlify/functions/create-payment-intent

require("dotenv").config()

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, total_amount, shipping_fee } = JSON.parse(event.body)
    console.log(cart)

    const calculateOrderAmount = () => {
      return total_amount + shipping_fee
    }
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "twd",
      })
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ err: error.message }),
      }
    }
  } else {
    return {
      statusCode: 200,
      body: "payment intent!",
    }
  }
}

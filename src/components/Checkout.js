import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NbwmkBaeZH592dBokkB1ksfAs2vQvTDL6c3R1BSKCCAsQFRcJ2I820mJmej6CYjWHTpv62aAF4CvhWaSG3HZ6dU00CQp94L1V"
);

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

function CheckoutForm() {
  const handleSubmit = async (event) => {
    const stripe = await stripePromise;
    var session = "";
    try {
      const response = await axios.post(
        "http://localhost:4242/create-checkout-session"
      );
      // Handle the response data as needed
      session = response?.data;
    } catch (error) {
      console.error(error);
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CardElement />
      {/* Your form content */}
      <button onClick={handleSubmit}>Pay</button>
    </div>
  );
}

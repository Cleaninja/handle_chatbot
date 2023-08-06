import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    // Create a payment method using the card element
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      // Send the payment method id to the server for processing
      fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {/* Your form content */}
      <button type="submit">Pay</button>
    </form>
  );
}

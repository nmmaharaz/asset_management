import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckOutCss/checkout.css";
import { useEffect, useState } from "react";
import { axiosSecure } from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAtuh";
import { toast } from "react-toastify";

const CheckoutForm = () => {
    const {user} = useAuth()
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false)
  useEffect(() => {
    getPaymentIntent();
  }, []);
  console.log(clientSecret);
  const getPaymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post("/create-payment-intent", {
        price: 1000,
        email: user?.email,
      });
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing( true)

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
        setProcessing(false)
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        setProcessing(false)
      return console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email:user?.email,
          },
        },
      })
  
      if (paymentIntent.status === 'succeeded') {
        try {

        const paymentInfo = {
            transactionId: paymentIntent?.id,
            name: user?.displayName,
            email:user?.email,
        }
          await axiosSecure.post('/order', paymentInfo)
          toast.success('Order Successful!')
        } catch (err) {
          console.log(err)
        } finally {
          setProcessing(false)
        }
      }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button 
        className="bg-purple-500 text-white font-semibold text-xl px-3 rounded-md py-1"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        $1000
      </button>
    </form>
  );
};

export default CheckoutForm;

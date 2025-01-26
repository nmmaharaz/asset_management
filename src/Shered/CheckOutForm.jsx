import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckOutCss/checkout.css";
import { useEffect, useState } from "react";
import { axiosSecure } from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAtuh";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { data } from "react-router-dom";
import Loading from "../Loading/Loading";
import { axiosPublic } from "../Hook/useAxiosPublic";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTimePrice] = useState(0);
  const [increseLimit, setIncreseLimit] = useState(0);
  const [processing, setProcessing] = useState(false);
  const { data: HREmployee, refetch: reset } = useQuery({
    queryKey: ["HREmployee"],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/totalPayment/${user?.email}`
      );
      setTimePrice(data.package);
      return data;
    },
  });

  useEffect(() => {
    if (totalPrice === 5) {
      setIncreseLimit(5);
    } else if (totalPrice === 8) {
      setIncreseLimit(10);
    } else if (totalPrice === 15) {
      setIncreseLimit(20);
    }
  }, [totalPrice]);

  // if(totalPrice === 8){
  //   setIncreseLimit(10)
  // }
  // }
  // if(totalPrice === 15){
  //   setIncreseLimit(20)
  // }

  
  useEffect(() => {
    getPaymentIntent();
  }, [HREmployee?.package]);
  
  console.log(increseLimit, "this is limit");
  const getPaymentIntent = async () => {
    console.log(total, "this is tk");
    try {
      const { data } = await axiosPublic.post("/create-payment-intent", {
        email: user?.email,
      });
      setClientSecret(data.clientSecret);
      setTotal(data.total);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setProcessing(false);
      return console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });

    if (paymentIntent.status === "succeeded") {
      try {
        const paymentInfo = {
          transactionId: paymentIntent?.id,
          name: user?.displayName,
          email: user?.email,
          limit: increseLimit
        };
        await axiosSecure.post("/order", paymentInfo);
        toast.success("Buy Now Successful!");
      } catch (err) {
        console.log(err);
      } finally {
        setProcessing(false);
      }
    }
  };

  if (loading) return <Loading></Loading>;

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
        {total}
      </button>
    </form>
  );
};

export default CheckoutForm;

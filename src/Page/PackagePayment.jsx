import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Shered/CheckOutForm";
import useAuth from "../Hook/useAtuh";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);
const PackagePayment = () => {
  // const { loading } = useAuth();
  // if (loading) return <Loading></Loading>;
  return (
    <div className="mx-auto w-9/12 sm:w-6/12 lg:w-4/12">
      <Helmet>
        <title>Safe Asset || Payment</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PackagePayment;

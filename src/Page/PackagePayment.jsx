import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../Shered/CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY)
const PackagePayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PackagePayment;
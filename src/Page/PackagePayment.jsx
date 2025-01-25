import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../Shered/CheckOutForm';
import useAuth from '../Hook/useAtuh';
import Loading from '../Loading/Loading';
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY)
const PackagePayment = () => {
    const {loading} = useAuth()
    if(loading) return <Loading></Loading>
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PackagePayment;
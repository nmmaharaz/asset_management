import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../Shered/CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY)
const PackagePayment = () => {
    return (
        <div>
            <div>
                <p className='text-3xl font-bold text-purple-600'>Add Employee Limit 5</p>
                <p className='text-2xl text-gray-800'>Increase Employee Limit 10 </p>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PackagePayment;
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const cardStyle = {
    style: {
      base: {
        color: '#ffffff', 
        fontFamily: '"Inter", sans-serif',
        fontSize: '16px', 
        '::placeholder': {
          color: '#9ca3af', 
        },
        padding: '0.75rem', 
        backgroundColor: '#1f2937', 
        borderRadius: '0.5rem', 
        border: '1px solid #4b5563', 
      },
      invalid: {
        color: '#f87171', 
        iconColor: '#f87171', 
      },
    },
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    // Mocking a successful payment without backend
    setTimeout(() => {
      if (card) {
        setSuccess(true);
        setError(null);
      } else {
        setError('Payment failed');
      }
    }, 1000);
  };

  return (

 
         <form className='w-full mx-auto bg-black dark:bg-zinc-900 p-6 rounded-lg shadow-lg' onSubmit={handleSubmit}>
          <label className="block mb-3 text-white">Card Details</label>
          <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
        <CardElement options={cardStyle} />
      </div>
      {error && <div className="mt-3 text-red-400">{error}</div>}
      {success && <div className="mt-3 text-green-400">Payment Successful</div>}
      <button
        type="submit"
        disabled={!stripe}
        className="mt-5 w-full bg-[#3ab611] text-white py-2 rounded-lg"
      >
        Pay
      </button>
      </form>
  

    
  );
};

export default CheckoutForm;

import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51PlSgILzbdSnJsYqj9QhYTY19sie7bVXCQAV7YmE1EGEC8ib6bnfsBZleVDmmWApsI814P39mEQ3R3Q6tAI5mSrj00MIZ1iRDf')

const StripeContext = ({children})=>(
    <Elements stripe={stripePromise}>
        {children}
    </Elements>
)

export default StripeContext;
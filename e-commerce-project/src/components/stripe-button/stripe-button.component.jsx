import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//functional component
//stripe needs to see currency in cents
const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_3hl8dgMG3ANS7e5JwDBeUjJY00UMYF0Xau';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };


    return (
        <StripeCheckout
            label='Pay Now'
            name='Steves E-Commerce Project'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            //token is the onSuccess callback to indicate 
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
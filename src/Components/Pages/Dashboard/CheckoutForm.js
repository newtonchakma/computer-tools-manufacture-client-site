import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import Item from '../../Home/Items/Item/Item';



const CheckoutForm = ({item}) => {
    const{totalPrice,orderEmail,itemName}=item
    const id = Item?.result?._id
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const[seccess,setSuccess] = useState('')
    const[clientSecret, setClientSecret]=useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(' https://infinite-shelf-47553.herokuapp.com/create-payment-intent',{
            method:'POST',
            headers: {
                'content-trype': 'application/json',
               /*  "authorization": `bearer ${localStorage.getItem("AccessToken")}` */
              },
              body:JSON.stringify({totalPrice})
        })
        .then(res=>res.json())
        .then(data=>{
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret)
                }
        })
    },[totalPrice])


   const handleSubmit = async(event)=>{            
    event.preventDefault();
    
    if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement); 
      if (card == null) {
        return;
      } 
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      });
     
        setCardError(error?.message || '')
      

      
      
      
    }   

     /* const {paymentIntent, error:ertentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: itemName,
              email:orderEmail
            },
          },
        },
      ); 
            */   
 

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
           
            <button  className='btn mt-4 btn-primary bg-blue-500' disabled={!stripe || clientSecret}  type="submit">
                Pay
            </button>
            <p><small className='text-red-700'>{cardError}</small></p>
            <p><small className='text-green-700'>{seccess}</small></p>
        </form>
    );
};


export default CheckoutForm;
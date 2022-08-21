import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../SharePages/Loading';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LXyPFISELlxw7OVoM7wAtrdTW9LMJVk162rrVqiOEl12dRnUgPBGcwj9a5csDeiV8GqFuW58JZ6WCyKEBFZdEFV00ugKk0E63');

const Payment = () => {
    
    const {id} =useParams()
    //const url =`http://localhost:5000/orders/${id}`
    const url =`http://localhost:5000/orders/${id}`;
console.log('uri',url);
    const { isLoading,  data:item } = useQuery(['orders',id], () =>
    fetch(url, {
        method: "GET",
         headers: {
        //    "authorization": `bearer ${localStorage.getItem("AccessToken")}`
        }   
      })
    
    .then(res =>
        res.json()
    )
)
if (isLoading) {

    return <Loading></Loading>
}

    return (
        <div className=' text-center'>
            <h1>please payment:{id}</h1>

           <div class="card w-50 my-12 max-w-md bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">pay for: {item.itemName}</h2>  
                <h2 class="card-title">please pay: ${item.totalPrice}</h2>  

  
            </div>
          </div>
          <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
              <div class="card-body">
                 <Elements stripe={stripePromise}>
                 <CheckoutForm  item={item}/>
                 </Elements>
    
              </div>
           </div>
         </div>

    );
};

export default Payment;




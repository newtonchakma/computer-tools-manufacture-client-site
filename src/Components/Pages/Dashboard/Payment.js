import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../SharePages/Loading';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LETruKJfoLuIOks7B68Sx4DKNEXsBDj0dVKRVu0ewGgzNKyqDbRqiYVeA1x3M1Eee9Y3SUjBGSxXzbTBedvlII600hR5MPAy5');
const Payment = () => {
    
    const {id} =useParams()
    const url =` https://infinite-shelf-47553.herokuapp.com/orders/${id}`
  

    const { isLoading, error, data:item } = useQuery(['orders',id], () =>
    fetch(url, {
        method: "GET",
        headers: {
        //   "authorization": `bearer ${localStorage.getItem("AccessToken")}`
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
        <div>
            <h1>please oayment:{id}</h1>
        <div className="hero min-h-screen" style={{background:"whitesmoke"}} >
            <div className="hero-content" style={{ flexDirection: "column" }}>

                <div className="card w-96 bg-base-100 shadow-xl orderCard" data-aos="fade-down">
                    <div className="card-body">
                        <h2 className="card-title text-primary"> pay for {item.result.itemName}</h2>
                        <h2 className="card-title text-primary"> please pay : ${item.result.totalPrice}</h2>
                        
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl orderCard" data-aos="fade-up">
                        <div className="card-body">
                        <Elements stripe={stripePromise}>
                                    <CheckoutForm  item={item}></CheckoutForm>
                                </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Payment;
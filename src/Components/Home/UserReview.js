import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Review from './Review';

const UserReview = () => {
    const [reviews,setReviews] = useState([])
  
    useEffect(()=>{
        const url = "http://localhost:5000/reviews";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='py-24'>
        <div className="flex flex-col text-center w-full mb-10">
        <h1 className=" font-medium text-3xl font-bold  mb-4 text-orange-600 uppercase">Check What Customers Are Saying About Us</h1>
        </div> 
        <div className='container '>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 px-5'>
                {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
            
        </div> 
    </div>
    );
};

export default UserReview;
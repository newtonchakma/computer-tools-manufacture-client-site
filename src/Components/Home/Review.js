import React from 'react';

const Review = ({review}) => {
    const {comment,img,rating,name} =review;

    return (
        <div class="card  bg-base-100 shadow">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{rating}</p>
    <p>{comment}</p>
  </div>
</div>
    );
};

export default Review;
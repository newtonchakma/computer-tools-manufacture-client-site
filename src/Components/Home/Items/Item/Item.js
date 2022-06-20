import React from 'react';

const Item = ({product}) => {
    const {price,picture,name,description,availablequantity,minimunOrder }=product
    return (
        <div class="card lg:card-side bg-base-100 shadow">
  <figure><img className='w-full rounded-lg' src={picture} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
   <div className='flex '>
   <div><strong>Available:</strong>{availablequantity}</div>
   <div className='ml-4 pl-3'><strong>Price:</strong>{price}</div>
   </div>
    <p><strong>minimunOrder: </strong>{minimunOrder}</p>
    <p></p>
    <p>{description}</p>
    <div class="card-actions md:justify-end sm:justify-center">
      <button class="btn btn-warning btn-sm">Listen</button>
    </div>
  </div>
</div>
    );
};

export default Item;
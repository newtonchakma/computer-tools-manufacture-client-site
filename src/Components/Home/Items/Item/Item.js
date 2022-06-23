import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
    const {price,picture,name,description,availablequantity,minimunOrder,_id }=product
    const navigate = useNavigate();

    const itemDetails = id =>{
       navigate(`/item/${id}`)
       console.log(id);
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow">
  <figure><img className='w-full rounded-lg' src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-orange-900">{name}</h2>
   <p><strong>Available:</strong>{availablequantity}</p>
   <p className=''><strong>Price:</strong>{price}</p>

    <p><strong>minimunOrder: </strong>{minimunOrder}</p>
    <p></p>
    <p>{description}</p>
    <div className="card-actions md:justify-end sm:justify-center">
      <button to='/purchcase'  onClick={()=> itemDetails(_id)} className="btn btn-warning btn-sm">Order</button>
    </div>
  </div>
</div>
    );
};

export default Item;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyOrder = () => {
    
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
 
 

    useEffect(()=>{
        if(user){
          fetch(`http://localhost:5000/orders?orderEmail=${user.email}`)
          .then(res =>res.json())
          .then(data => setMyOrders(data))
          //.then(data => console.log(data))
        }
      },[user])
    return (
        <div className=' px-3'>
      <div className='text-center'>
      <h2 className=" font-medium text-2xl font-bold  mb-4 text-orange-600 uppercase">My Total Orders: {myOrders.length} pcs</h2>
      </div>
        <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Email</th>
        <th>totalOrder</th>
        <th>Price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody className=''>
     {
        myOrders.map((item,index)=>  <tr>
        <th>{index+1}</th>
        <td>{item.itemName}</td>
        <td>{item.orderEmail}</td>
        
        <td>{item.totalOrders}</td>
        <td><strong>$ </strong>{item.totalPrice}</td>
        <td>
    <FontAwesomeIcon  className='text-danger icon-size' icon={faTrash}  />
    </td>
        
      </tr>
        
        )}
      
    </tbody>
  </table>
</div>
    </div>
);
};

export default MyOrder;
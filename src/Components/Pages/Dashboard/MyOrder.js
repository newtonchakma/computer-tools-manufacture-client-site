import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';

const MyOrder = () => {
    
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate()
 

    useEffect(()=>{
        if(user){
          fetch(`http://localhost:5000/orders?orderEmail=${user.email}`,{
            method:'GET',
            headers:{
              'authorization':`Bwarer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res =>{
            console.log('res',res);
            if(res.status ===401 || res.status===403){
              signOut(auth);
              localStorage.removeItem('accessToken');
              navigate('/')
            }
             return res.json()
          })
          .then(data => setMyOrders(data))
          //.then(data => console.log(data))
        }
      },[user])


      const deleteButton = (id) => {
        const proced = window.confirm("Are You Agree For Delete ?")
        if (proced) {
          const url = `http://localhost:5000/orders/${id}`
          fetch(url, {
            method: "DELETE",
            headers: {
              "authorization": `bearer ${localStorage.getItem("AccessToken")}`
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
          
        } 
      }
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
       
       
        {item.payment === "paid" ? <Link to={''}><td><button disabled readOnly onClick={() => deleteButton(item._id)} className="btn btn-sm btn-warning" >Cancel</button></td></Link> : <Link to={''}><td><button onClick={() => deleteButton(item._id)} className="btn btn-sm bg-red-600" >Cancel</button></td></Link>}

  
        
      </tr>
        
        )}
      
    </tbody>
  </table>
</div>
    </div>
);
};

export default MyOrder;
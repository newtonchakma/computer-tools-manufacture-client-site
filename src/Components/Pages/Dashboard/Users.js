import React, { useEffect, useState } from 'react';
import User from './User';



const Users = () => {
   const [users, setUsers] = useState([]);
   useEffect(()=>{
     fetch(` https://infinite-shelf-47553.herokuapp.com/user`,{
        method:'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('AccessToken')}`
        }
     })
    .then(res=>res.json())
    .then(data=>setUsers(data))
   },[])
    return (
        <div className=' px-3'>
        <div className='text-center'>
        <h2 className=" font-medium text-2xl font-bold  mb-4 text-orange-600 uppercase">total users: {users.length} </h2>
        </div>
          <div class="overflow-x-auto">
    <table class="table w-full">
    
      <thead>
        <tr>
          <th>number</th>
          <th>Email</th>
          <th>make Admin</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody className=''>
       {
          users.map((user,index)=><User 
            key={user._id}
            user={user}
            index={index}
            ></User>)
       }
      </tbody>
    </table>
  </div>
      </div>
    );
};

export default Users;
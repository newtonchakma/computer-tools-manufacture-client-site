import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../../SharePages/Loading';

const Users = () => {
   const [users, setUsers] = useState([]);
   useEffect(()=>{
     fetch(`http://localhost:5000/user`)
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
          users.map((user,index)=>  <tr>
          <th>{index+1}</th>
          <td>{user.email}</td>
          <td><button className='btn btn-xs'>Make Admin</button></td>
          <td><button className='btn btn-xs'>Remove</button></td>
        </tr>
          
          )}
        
      </tbody>
    </table>
  </div>
      </div>
    );
};

export default Users;
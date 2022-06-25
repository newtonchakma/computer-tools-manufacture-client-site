import React from 'react';
import { toast} from 'react-toastify';
import Loading from '../../SharePages/Loading';

const User = ({user,index}) => {
    const {email, role}= user;
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'put',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 403){
                toast.error('Failed to make an admin')
            }
            res.json()})
        .then(data=>{
            toast.success('successfully made an admin')
           /* if(data.modifiedCount > 0){
            
           
           } */
            
        })
    }
    return (
     
             <tr>
          <th>{index+1}</th>
          <td>{email}</td>
          <td>{role !== 'admin' && <button className='btn btn-xs btn-success' onClick={makeAdmin}>Make Admin</button>}</td>
          <td><button className='btn btn-xs btn-warning'>Remove</button></td>
        </tr>
      
    );
};

export default User;
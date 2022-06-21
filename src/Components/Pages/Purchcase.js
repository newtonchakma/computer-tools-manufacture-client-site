import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchcase = () => {
    const {id} = useParams();
    const [item, setItem] =useState({})
    const [user] = useAuthState(auth);

    useEffect(()=>{
       const url =(`http://localhost:5000/service/${id}`);
       console.log(url)
       fetch(url)
       .then(res=>res.json())
       .then(data=>setItem(data))

    },[id])

    
    const handleBooking =(event)=>{
        event.preventDefault()
        const order = {
            itemId: item._id,
            itemName: item.name,
            price: item.price,
            orderEmail: user.email,
            OrderName: user.displayName,
            phone: event.target.phone.value,
            order: event.target.number.value,
            address: event.target.address.value
        }

        fetch(`http://localhost:5000/orders`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
        
        
        })
    }
    return (
        <div>
            <h1 className='text-5xl text-center'>this in private route:{item.name}</h1>

            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
              <h3 className="font-bold text-lg text-secondary">Booking for: {item.name}</h3>
              <h3 className="font-bold text-lg text-secondary">Available items: {item.availablequantity}</h3>
                        <label><strong>Price :</strong></label>
                        <input type="text" value={item.price}  className="input input-bordered w-full max-w-xs" />
                        
                        <input type="text" name="name" disabled ='true' value={user?.displayName || ' '} className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled='true' value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>

                        <input type="text" name="number"  placeholder='minimun order 300'  className="input input-bordered w-full max-w-xs" required />

                        <input type="text" name="address" placeholder='Address'  className="input input-bordered w-full max-w-xs" required />
                       
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
        </div>
    );
};

export default Purchcase;
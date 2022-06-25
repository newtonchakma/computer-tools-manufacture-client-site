import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchcase = () => {
    const {id} = useParams();
    const [item, setItem] =useState({})
    const [reload, setReload] =useState(true)
    const [user] = useAuthState(auth);

    useEffect(()=>{
       const url =(`http://localhost:5000/service/${id}`);
       console.log('pre',url)
       fetch(url)
       .then(res=>res.json())
       .then(data=>setItem(data))

    },[id, reload])
    
    const handleBooking =(event)=>{
        event.preventDefault()
       
        const stockQuantity = parseInt(item.availablequantity);
        const minimunOrder =parseInt(item.minimunOrder);
        const orderQuantity = event.target.number.value;
        if(orderQuantity < minimunOrder || orderQuantity > stockQuantity){
            return toast.error("Please chack stock and minimunOrder Quantity")
        }else{
            const price = orderQuantity * parseInt(item.price)
            console.log(price);
        
        const order = {
            itemId: item._id,
            itemName: item.name,
            orderEmail: user.email,
            OrderName: user.displayName,
            totalOrders: orderQuantity,
            phone: event.target.phone.value,
            address: event.target.address.value,
            totalPrice : price
        }
        console.log(order);

        fetch(`http://localhost:5000/orders`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order),
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                toast('Order successfully')
            }
            else{
                toast.error('Allready order')
            } 
        
        })
    }

      
    }
    return (
        <div className='py-5 my-4'>
            <div class="card card-side bg-base-100 shadow-xl">
               <figure><img src={item.picture} alt={item.name}/></figure>
                 <div class="card-body">
                   <h2 class="card-title"><strong>{item.name}</strong></h2>
                    <p>price: <span>$</span>{item.price}</p>
                    <p>Available: {item.availablequantity}</p>
                    <p>Minimun Order: {item.minimunOrder}</p>
                 
             </div>
        </div>

            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                      {/*   <input type="text" value={item.price}  className="input input-bordered w-full max-w-xs" /> */}
                        
                        <input type="text" name="name" disabled ='true' value={user?.displayName || ' '} className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled='true' value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>

                        <input type="number" name="number"  placeholder='minimun order 300'  className="input input-bordered w-full max-w-xs" required />

                        <input type="text" name="address" placeholder='Address'  className="input input-bordered w-full max-w-xs" required />
                       
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
        </div>
    );
};

export default Purchcase;
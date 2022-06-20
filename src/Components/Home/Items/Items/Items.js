import React, { useEffect, useState } from 'react';
import useProjucts from '../../../Hooks/useProjucts';
import Item from '../Item/Item';

const Items = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
    fetch(`http://localhost:5000/service`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])
    return (
        <div>
            <h1>Inventory Products:{products.length}</h1>
            <div className='container '>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 px-5'>
                    {
                    products.map(product => <Item
                        key={product._id}
                        product={product}
                        ></Item>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Items;
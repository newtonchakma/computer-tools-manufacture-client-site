import React, { useEffect, useState } from 'react';
import useProjucts from '../../../Hooks/useProjucts';
import Item from '../Item/Item';

const Items = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
    fetch(` https://infinite-shelf-47553.herokuapp.com/service`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])
    return (
        <div className='py-24'>
            <div className="flex flex-col text-center w-full mb-10">
            <h1 className=" font-medium text-5xl font-bold  mb-4 text-orange-600 uppercase">PRODUCTS</h1>
            </div> 
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
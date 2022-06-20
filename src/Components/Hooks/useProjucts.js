import axios from 'axios';
import  { useEffect, useState } from 'react';

const useProjucts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        (async ()=>{
            const url =`http://localhost:5000/service`;
            const {data}= await axios.get(url);
            setProducts(data.result)
        })();
    },[])
    return [products,setProducts]
};

export default useProjucts;
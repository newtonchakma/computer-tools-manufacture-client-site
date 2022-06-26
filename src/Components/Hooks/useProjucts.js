import axios from 'axios';
import  { useEffect, useState } from 'react';

const useProjucts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        (async ()=>{
            const url =` https://infinite-shelf-47553.herokuapp.com/service`;
            const {data}= await axios.get(url);
            setProducts(data.result)
        })();
    },[])
    return [products,setProducts]
};

export default useProjucts;
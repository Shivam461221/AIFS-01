import { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from './productCard';
export default function Products(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      axios.get("https://dummyjson.com/products?limit=100")
      .then(response=>{
        console.log(response.data);
        setProducts(response.data.products);
      })
      .catch(error=>console.log(error));
    },[])
    return(
        <>
            <ProductCard productList={products} />
        </>
    )
}
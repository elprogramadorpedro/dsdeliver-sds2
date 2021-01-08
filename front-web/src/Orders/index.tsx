import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepeHeader from './StepHeader';
import {Product} from './types'
import {fetchProducts} from '../api'
import './styles.css';


function Orders() {
 const [products, setProducts]= useState<Product []>([]);

    useEffect(()=>{
        
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">    
           <StepeHeader/>
           <ProductsList products={products}/>
        </div>
    )
}

export default Orders;


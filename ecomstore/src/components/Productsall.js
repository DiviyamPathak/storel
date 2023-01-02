import React from 'react';
import { useSelector } from 'react-redux';
const Productsall = () => {
    const product = useSelector((state) =>state)

    console.log(product)
    return (
        <div>
            <h1> all Product</h1>  
        </div>
    );
};

export default Productsall;
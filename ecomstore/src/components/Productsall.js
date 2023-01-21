import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Product from './Product';
import { setproducts } from '../reduxd/actions/Productactions';
const Productsall = () => {
    const product = useSelector((state) => state.allproducts.products);
    const dispatch = useDispatch();

    const fetchallproducts = async () => {
        const resp = await axios.get("https://fakestoreapi.com/products").catch((err) => { console.log(err) });
        dispatch(setproducts(resp.data));
    }
    // eslint-disable-next-line
    useEffect(()=>{fetchallproducts()},[]);

    console.log(product)

    return (
        <div className="ui grid container">

            <h1> all Product</h1>
            <Product />
        </div>
    );
};

export default Productsall;
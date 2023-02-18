import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Product from './Product';
import { setproducts } from '../reduxd/actions/Productactions';
const Productsall = () => {
    const product = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchallproducts = async () => {
        const resp = await axios.get("https://fakestoreapi.com/products").catch((err) => { console.log(err) });
        dispatch(setproducts(resp.data));
    }
    // eslint-disable-next-line
    useEffect(()=>{fetchallproducts()},[]);

    console.log(product)

    
  
        /*eslint no-undef: "error"*/
    return <>
        <div className="ui grid container">{
            product.map(element => {
                const {id , title , image ,price, category} = element
                return(
                
                    
                <div className="four wide column" key={id}>
                {/* <Link to={`/product/${id}`}> */}
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img src={image} alt={title} />
                      </div>
                      <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                      </div>
                    </div>
                  </div>
                {/* </Link> */}
              </div>
                   )
            })}
            
        </div> 
    
    </>
};

export default Productsall;
import React from 'react';
import { useSelector } from 'react-redux';

const Product = () => {
    const product = useSelector((state)=> state.allProducts.products)
    const {id, name, classi } = product[0]
    return (
        <div className='four wide column'>
                  {/* <Link to={`/product/${id}`}> */}
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img  alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">$ {classi}</div>
                <div className="meta"></div>
              </div>
            </div>
          </div>
        {/* </Link> */}
        </div>
    );
};

export default Product;
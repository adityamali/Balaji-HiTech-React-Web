import React, {useState} from 'react'
import './product.css'
import Data from '../../resources/data/products-data';
import Card from './product-card'
import Buttons from './buttons';

function Product() {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  return (
    <>
        <div className="product center">
            <h2>Our Products</h2>
            <div className="category">
                {/* <Buttons /> */}
                <div className="baby category-btn">
                  Baby
                </div>
                <div className="mother category-btn">
                  Mother
                </div>
            </div>
            <div className="card-container">
              <Card item={item} />
            </div>
        </div>
    </>
  );
}

export default Product
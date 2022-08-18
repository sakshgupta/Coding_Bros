import React from 'react';
import Food from '../components/all_food.json';

function shop() {
    return (
        <div className="shop row" id="shop">
            {
                Food.map((rec, key) => {
                    return (
                        <div className="card">
                            <div className="imgBox">
                                <img src={rec.source} alt="pedigree-vital" className="mouse" />
                            </div>
                            <div className="contentBox">
                                <h3>{rec.name}</h3>
                                <h2 className="price">{rec.main_price}.<small>{rec.small_price}</small> ₹</h2>
                                <a href="#" className="buy">Add to Cart</a>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default shop
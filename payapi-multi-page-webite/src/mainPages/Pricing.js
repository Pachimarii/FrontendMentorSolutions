import React, { useState } from 'react';
import { Button } from '../components'; 
import data from '../pricingData.json';

const Pricing = () => {
    let [plans] = useState(data);

    return (
        <div className="page-container pricing-page-container">
            <h1 className="price-header">Pricing</h1>
            <div className="price-card-container">
                { plans.map(({ plan, description, price, features }) => (
                    <div className="price-card" key={plan}>
                        <h2 className="price-card-header">{plan} Plan</h2>
                        <p className="price-card-desc">{description}</p>
                        <p className="price-card-price"><span>$</span>{price.toFixed(2)}</p>
                        <ul className="price-card-features">
                            { Object.entries(features).map(feature => {
                                const [key, value] = feature;
                                    return (
                                        <li className={`price-card-feature${value ? ' price-card-feature-available' : ''}`} key={key}>
                                            {key}
                                        </li> 
                                    )   
                                })
                            }                
                        </ul>  
                        <Button text="Request Access" color="transparent-blue" />
                    </div>
                ))}  
            </div>
        </div>
    )
}

export default Pricing
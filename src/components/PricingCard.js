import './PricingCardStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            

            <div className='card'>
                <h1>-Vente-</h1>
                <span className='bar'></span>
                <p className='btc'>$ 800</p>
                <p style={{color:'Background'}}>-Etat: Neuf-</p>
                <p>-Djerba-</p>
                <p>+216 53567890</p>
                <Link to="/contact" className='btn'>
                    Purchase Now
                </Link>
            </div> 

            <div className='card'>
                <h1>-Location-</h1>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>-3 Days-</p>
                <p>-Hammemet-</p>
                <p>+216 26578945</p>
                <Link to="/contact" className='btn'>
                    Purchase Now
                </Link>
            </div>

            <div className='card'>
                <h1>-Vente-</h1>
                <span className='bar'></span>
                <p className='btc'>$ 500</p>
                <p style={{color:'Background'}}>-Etat: Bonne occasion-</p>
                <p>-Sousse-</p>
                <p>+216 98737632</p>
                <Link to="/contact" className='btn'>
                    Purchase Now
                </Link>
            </div> 

        </div>
    </div>
  )
}

export default PricingCard
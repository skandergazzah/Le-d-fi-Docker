import './ProductCardStyles.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <div className='img-card'>
                 <img src={props.imgsrc} alt='produi1'/>
                 <h2 className='prod-title'>{props.title}</h2>
                 <div className='pro-details'>
                     <p>{props.text}</p>
                     <div className='pro-btns'>
                         <NavLink to={props.view}
                         className='btn'>View</NavLink>
                         <NavLink to="url.com" className='btn'>
                             Source
                         </NavLink>
                     </div>
                 </div>
             </div>
  )
}

export default ProductCard;
import './ProductCardStyles.css';
import React from 'react'
import ProductCard from './ProductCard';
import ProdCardData from './ProductCardData';

const Product = () => {
  return (
    <div className='img-card'>
        <h1 className='prod-heading'>Products</h1>
         <div className='img-container'>
             {ProdCardData.map((val,index)=>{
                 return(
                     <ProductCard 
                     key={index}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     text={val.text}
                     view={val.view}
                     />
                 )
             })}
         </div>
    </div>
  )
}

export default Product;
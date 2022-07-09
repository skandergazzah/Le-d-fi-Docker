import './ServiceCardStyles.css';
import React from 'react'
import ServiceCard from './ServiceCard';
import ServiceCardData from './ServiceCardData';

const Service = () => {
  return (
    <div className='img-card'>
        <h1 className='prod-heading'>Services</h1>
         <div className='img-container'>
             {ServiceCardData.map((val,index)=>{
                 return(
                     <ServiceCard 
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

export default Service;
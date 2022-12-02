import './EventCardStyles.css';
import React from 'react'
import EventCard from './EventCard';
import EventCardData from './EventCardData';

const Event = () => {
  return (
    <div className='img-card'>
        <h1 className='prod-heading'>Events</h1>
         <div className='img-container'>
             {EventCardData.map((val,index)=>{
                 return(
                     <EventCard 
                   
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

export default Event;
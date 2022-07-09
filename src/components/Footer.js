import './FooterStyles.css';
import {FaHome , FaPhone , FaMailBulk , FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                 <div className='location'>
                     <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                     <div>
                         <p>hammem Sousse .</p>
                         <p>Tunisie .</p>
                     </div>
                 </div>

                 <div className='phone'>
                     <h4>
                     <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                  +216 24040474
                     </h4>
                 </div>

                 <div className='phone'>
                     <h4>
                     <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                  skanlau13@gmail.com
                     </h4>
                 </div>


            </div>

            <div className='right'>
               <h4>About the community</h4>
               <p>this is about u surfer</p>
               <div className='social'>
               <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
               <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />
               <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
               </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
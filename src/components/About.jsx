import React from 'react'

const About = () => {
   return (
     <div className="page-container">
       <div className="about-section">
         <h2>About Our Travel Company</h2>
         <p>We are passionate about helping travelers discover the beauty and diversity of European destinations. Our team of travel experts has years of experience exploring every corner of the continent.</p>
         
         <div className="about-content">
           <div className="about-text">
             <h3>Our Mission</h3>
             <p>To provide authentic travel experiences that connect people with local cultures, history, and natural wonders.</p>
             
             <h3>What We Offer</h3>
             <ul>
               <li>Comprehensive travel guides</li>
               <li>Cultural insights and tips</li>
               <li>Customized itinerary planning</li>
               <li>24/7 customer support</li>
             </ul>
           </div>
           <div className="about-image">
             <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Travel experience" />
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default About;
import React from 'react'
// Travel Tips Page Component
const TravelTips = () => {
   return (
     <div className="page-container">
       <h2>Travel Tips & Advice</h2>
       
       <div className="tips-container">
         <div className="tip-card">
           <h3>Planning Your Trip</h3>
           <ul>
             <li>Book flights and accommodations in advance for better prices</li>
             <li>Check passport and visa requirements for your destination</li>
             <li>Purchase travel insurance for peace of mind</li>
             <li>Research local customs and etiquette</li>
           </ul>
         </div>
         
         <div className="tip-card">
           <h3>Packing Essentials</h3>
           <ul>
             <li>Pack versatile clothing that can be layered</li>
             <li>Bring comfortable walking shoes</li>
             <li>Don't forget chargers and power adapters</li>
             <li>Carry a basic first-aid kit and necessary medications</li>
           </ul>
         </div>
         
         <div className="tip-card">
           <h3>Money Matters</h3>
           <ul>
             <li>Notify your bank of your travel plans</li>
             <li>Carry a mix of payment methods (cash, credit cards)</li>
             <li>Research the local currency and exchange rates</li>
             <li>Keep emergency cash separate from your wallet</li>
           </ul>
         </div>
         
         <div className="tip-card">
           <h3>Staying Safe</h3>
           <ul>
             <li>Keep copies of important documents</li>
             <li>Be aware of your surroundings in crowded areas</li>
             <li>Know emergency numbers for your destination</li>
             <li>Stay connected with family and friends back home</li>
           </ul>
         </div>
       </div>
     </div>
   );
 };

 export default TravelTips;
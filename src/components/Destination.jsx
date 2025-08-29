import React from 'react'
import {  Link } from 'react-router-dom';

// Destinations Page Component
const Destinations = () => {
   const countries = [
     { id: 1, name: 'France', image: '/src/assets/France.jpeg' },
     { id: 2, name: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
     { id: 3, name: 'Germany', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
     { id: 4, name: 'Italy', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
   ];
 
   return (
     <div className="page-container">
       <h2>Popular Destinations</h2>
       <p className="page-intro">Select a country to explore its culture, attractions, and travel information</p>
       
       <div className="countries-grid">
         {countries.map(country => (
           <div key={country.id} className="country-card">
             {/* <Link to={`/country/${country.name.toLowerCase()}`}> */}
             <Link to={`/country/${country.name.toLowerCase().replace(' ', '-')}`}>
               <img src={country.image} alt={country.name} />
               <div className="country-overlay">
                 <h3>{country.name}</h3>
               </div>
             </Link>
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default Destinations;
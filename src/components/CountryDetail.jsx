import React from 'react'
import {useParams} from 'react-router-dom'
const CountryDetail = () => {
   const { name } = useParams();
   const formattedName = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   const countryData = {
   france: {
     history: "France has a rich history dating back to the Middle Ages. It played a major role in many historical events including the Renaissance, the French Revolution, and both World Wars.",
     culture: "French culture is known for its cuisine, fashion, art, and philosophy. The country is home to world-renowned museums like the Louvre and iconic landmarks like the Eiffel Tower.",
     hotspots: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "French Riviera", "Mont Saint-Michel"],
     weather: "France has a temperate climate. Summers are generally warm, winters are cool, and rainfall is distributed throughout the year.",
     image: "https://images.unsplash.com/photo-1703007169439-5d5461fc14be?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     officialSite: "https://www.france.fr/en"
   },
   'united-kingdom': {
     history: "The United Kingdom has a long and storied history, from ancient times through the Roman occupation, Middle Ages, British Empire, and its modern role in global affairs.",
     culture: "British culture has influenced the world through its language, literature, music, and legal systems. The UK is known for its royal heritage, historic universities, and diverse cities.",
     hotspots: ["Big Ben", "Stonehenge", "Buckingham Palace", "Edinburgh Castle", "Lake District"],
     weather: "The UK has a temperate maritime climate with moderate temperatures, plentiful rainfall, and often changeable weather conditions.",
     image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
     officialSite: "https://www.visitbritain.com/"
   },
   germany: {
     history: "Germany's history spans over two millennia, from the Holy Roman Empire to the Protestant Reformation, both World Wars, and its reunification in 1990.",
     culture: "German culture is known for its contributions to philosophy, music, literature, and science. The country is famous for its beer, Christmas markets, and automotive industry.",
     hotspots: ["Neuschwanstein Castle", "Brandenburg Gate", "Black Forest", "Cologne Cathedral", "Berlin Wall"],
     weather: "Germany has a temperate seasonal climate with warm summers and cold winters. Precipitation occurs throughout the year.",
     image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
     officialSite: "https://www.germany.travel/"
   },
   italy: {
     history: "Italy has a history that spans thousands of years, from the Roman Empire to the Renaissance, and its unification in the 19th century.",
     culture: "Italian culture is famous for its art, architecture, music, and cuisine. Italy is home to more UNESCO World Heritage Sites than any other country.",
     hotspots: ["Colosseum", "Venice Canals", "Florence Duomo", "Leaning Tower of Pisa", "Amalfi Coast"],
     weather: "Italy has a predominantly Mediterranean climate with hot, dry summers and mild, rainy winters. Northern regions experience colder winters.",
     image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
     officialSite: "https://www.italia.it/en"
   }
 };

 const data = countryData[name] || {};

 return (
   <div className="page-container">
     <div className="country-header">
       <h2>{formattedName}</h2>
       <img src={data.image} alt={formattedName} className="country-hero" />
     </div>
     
     <div className="country-content">
       <div className="info-section history-section">
         <h3>History</h3>
         <p>{data.history}</p>
       </div>
       
       <div className="info-section culture-section">
         <h3>Culture</h3>
         <p>{data.culture}</p>
       </div>
       
       <div className="info-section hotspots-section">
         <h3>Tourist Hotspots</h3>
         <ul>
           {data.hotspots && data.hotspots.map((hotspot, index) => (
             <li key={index}>{hotspot}</li>
           ))}
         </ul>
       </div>
       
       <div className="info-section weather-section">
         <h3>Weather</h3>
         <p>{data.weather}</p>
       </div>
       
       <div className="official-link">
         <h3>Official Tourism Information</h3>
         <a href={data.officialSite} target="_blank" rel="noopener noreferrer">
           Visit Official {formattedName} Tourism Site
         </a>
       </div>
     </div>
   </div>
 );
};

export default CountryDetail;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { socialLinks } from './components/data';
// Home Page Component
const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover the World</h1>
          <p>Explore amazing destinations across Europe with our travel guides</p>
          <Link to="/destinations" className="cta-button">Explore Destinations</Link>
        </div>
      </div>
      
      <div className="featured-section">
        <h2>Why Travel With Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Our travel experts provide the best recommendations for your journey.</p>
          </div>
          <div className="feature">
            <h3>Cultural Insights</h3>
            <p>Learn about local customs, traditions, and hidden gems.</p>
          </div>
          <div className="feature">
            <h3>Best Experiences</h3>
            <p>From food to adventures, we help you create unforgettable memories.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
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

// Destinations Page Component
const Destinations = () => {
  const countries = [
    { id: 1, name: 'France', image: '../src/assets/France.jpeg' },
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

// Country Detail Component
// const CountryDetail = ({ match }) => {
//   const countryName = match.params.name;
//   const formattedName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
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

// Navigation Component
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">EuroTravel</Link>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/destinations" className="nav-link" onClick={() => setMenuOpen(false)}>Destinations</Link>
          <Link to="/travel-tips" className="nav-link" onClick={() => setMenuOpen(false)}>Travel Tips</Link>
        </div>
        
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/travel-tips">Travel Tips</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Countries</h3>
          <ul>
            <li><Link to="/country/france">France</Link></li>
            <li><Link to="/country/united kingdom">United Kingdom</Link></li>
            <li><Link to="/country/germany">Germany</Link></li>
            <li><Link to="/country/italy">Italy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul className="social-links">
             {socialLinks.map((link) => (
                <li className="icon-item" key={link.id}>
                 <a  href={link.href}>
                     <i className={link.icon}></i>
                 </a>
               </li>
            ))}
          </ul>

          {/* <div className="social-links">
            <a href="#" aria-label="Facebook"><span>Facebook</span></a>
            <a href="#" aria-label="Instagram"><span>Instagram</span></a>
            <a href="#" aria-label="X (formerly Twitter)"><span>X</span></a>
          </div> */}
          <p>Subscribe to our newsletter for travel updates</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EuroTravel. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/country/:name" element={<CountryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
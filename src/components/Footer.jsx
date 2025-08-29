import React from 'react'
import {  Link } from 'react-router-dom';

import { socialLinks } from './data';
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

export default Footer;
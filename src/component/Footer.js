import React from 'react'
import { socialLinks,pageLinks } from '../data';
const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {
            pageLinks.map((link)=>{
              const {id,href,text} = link
              return(
                <li key={id}>
                <a href={href} className="footer-link">{text}</a>
              </li>
              )
            })
          }
        </ul>
        <ul className="footer-icons">
          {
            socialLinks.map((link)=>{
              const {id,className,href} = link
              return(
                <li key={id}>
                  <a href={href} rel="noreferrer" target="_blank" className="footer-icon">
                    <i className={className}></i>
                  </a>
              </li>
              )
            })
          }
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"> {new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>
    </div>
  );
}

export default Footer

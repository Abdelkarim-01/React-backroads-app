import React from 'react'
import logo from '../images/logo.svg'
import {pageLinks,socialLinks} from '../data'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {
              pageLinks.map((link)=>{
                const {id,href,text} = link
                return(
                  <li key={id}>
                    <a href={href} className="nav-link"> {text} </a>
                  </li>
                );
              })
            }
          </ul>

          <ul className="nav-icons">
            {
              socialLinks.map((link)=>{
                return (
                  <li key={link.id}>
                    <a href={link.href} target="_blank" className="nav-icon" rel="noopener noreferrer">
                      <i className={link.className}></i>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar

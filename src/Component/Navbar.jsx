import React from 'react'
import { menu, socialicons } from '../data';
import Main_IMG from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Main_IMG} className="nav-logo" alt="backroads" /><br />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">

            {

              menu.map(
                (item) => (<li>
                  <a href={item.link} className="nav-link">
                    {item.name}
                  </a>
                </li>
                ))}


          </ul>

          <ul className="nav-icons">
            {
              socialicons.map((item) => (<li>
                <a href={item.link} target="_blank" className="nav-icon"
                ><i className={item.icon}></i></a>
              </li>))
            }

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
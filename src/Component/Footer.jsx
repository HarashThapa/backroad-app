import React from 'react'
import { menu, socialicons} from '../data'

const Footer = () => {
  return (
    <>
    <footer className="section footer">
      <ul className="footer-links">

      {
        menu.map(
          (item)=>(<li>
            <a href={item.link} className="footer-link">{item.title}</a>
          </li>)
        )
      }
      </ul>

      <ul className="footer-icons">
        
      {
        socialicons.map((item)=>(
          <li>
          <a href={item.link} target="_blank" className="footer-icon"
            ><i className={item.icon}></i></a>
        </li>
        ))
      }
        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  )
}

export default Footer
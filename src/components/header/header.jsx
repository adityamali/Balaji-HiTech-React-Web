import React from 'react'
import './header.css'

function Header() {
  return (
    <>
        <div className="brand">
            <h3>Balaji HiTech</h3>
            <div className="contact-nav">
                <ul>
                    <li>
                        <div className="row">
                        <div className="circle email"></div>
                        <a href="mailto:contact@balajihitech.com">contact@balajihitech.com</a>
                        </div>
                    </li>
                    &nbsp; &nbsp;
                    <li>
                        <div className="row">
                        <div className="circle phone"></div>
                        <a href="tel:+91">+91 9876543210</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="nav">
            <ul className='nav-list' >
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div>
    </>
  );
}

export default Header
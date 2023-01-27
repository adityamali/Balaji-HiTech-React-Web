import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
        <div className="contact center">
        <h2>Contact Us</h2>
        <div className="contact-split">
            <div className="connect">
                <div className="contact-card">+91 9876543210</div>
                <div className="contact-card">contact@balajihitech.com</div>
            </div>
            <div className="write">
                <form action="" method="post">
                    <input type="text" name="name" id="" placeholder='Name'/>
                    <input type="text" name="company" id="" placeholder='Company'/>
                    <input type="email" name="email" id="" placeholder='Email'/>
                    <input type="tel" name="phone" id="" placeholder='Phone' />
                    <textarea name="message" id="message" cols="30" rows="7" placeholder='Message'></textarea>
                    <input type="submit" value="Send" id='submit' />
                </form>
            </div>
        </div>
        </div>
    </>
  );
}

export default Contact
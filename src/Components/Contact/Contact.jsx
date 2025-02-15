import React, { useState } from 'react'

import './Contact.css'

import msg_icon from '../../assets/message-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/call-icon.png'
import mail_icon from '../../assets/email-icon.png'
import arrow from '../../assets/whiteNext-icon.png'

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_MAIL_KEY); // Will get an access key from web3forms
                                                                // when email is entered in the website

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>We are available 24/7, contact us to know more and get a chance to have a tour in our university.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />abcd123@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 1234567890</li>
                    <li><img src={location_icon} alt="" />2nd cross, Sandey<br />VP University , Leaf Village </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Your Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                    <label>Write Your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit <img src={arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact
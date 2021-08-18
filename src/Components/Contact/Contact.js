import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact-area">
            <div className="contact-header">
                <h1>Contact me</h1>
                <p>get in touch</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-des">
                        <h1>Get in Touch</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, beatae.</p>
                    </div>
                    <br />
                    <div className="contact-name">
                        <div className="icon-style"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="address-style">
                            <h3 className="address-header">Name</h3>
                            <h3>Afsana Hossain</h3>
                        </div>
                    </div>
                    <div className="contact-name">
                        <div className="icon-style"><FontAwesomeIcon icon={faMapMarker} /></div>
                        <div className="address-style">
                            <h3 className="address-header">Address</h3>
                            <h3>Dhaka, Bangladesh</h3>
                        </div>
                    </div>
                    <div className="contact-name">
                        <div className="icon-style"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className="address-style">
                            <h3 className="address-header">Email</h3>
                            <h3>afsanahossain65@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="contact-field">
                    <h1>Message me</h1>
                    <form action="">
                        <input type="name" placeholder="Name"/>
                        <input type="email" placeholder="Email"/><br />
                        <input className="sub-field" type="subject" placeholder="Subject"/><br />
                        <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>

                        <button>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
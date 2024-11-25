import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { useUser } from '../../UserContext';
import emailjs from 'emailjs-com';

function Contact() {
    const { user } = useUser(); 
    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace the following with your EmailJS details
        const serviceID = 'service_82c9zkq';
        const templateID = 'template_52kz79q';
        const userID = 'oqD_hS4y_Xg-pYsh1';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.error('FAILED...', error);
            });
    };

 


    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact</h1>
                <hr />
                <br />
                
                <div className="contact-apps">
                    <div className="contact-app">
                        <a href="https://www.instagram.com/ellenyao2009">
                            <img src="/image/instagram.svg" alt="Instagram" width={'20%'}/>
                        </a>
                    </div>

                    <div className="contact-app">
                        <a href="mailto: ellenyao2009@hotmail.com">
                            <img src="/image/email-outline.svg" alt="Instagram" width={'20%'}/>
                        </a>
                    </div>

                    <div className="contact-app">
                        <a href="https://www.linkedin.com">
                            <img src="/image/linkedin-original.svg" alt="Instagram" width={'20%'}/>
                        </a>
                    </div>

                    <div className="contact-app">
                        <a href="https://www.pintrest.com">
                            <img src="/image/pinterest.svg" alt="Instagram" width={'20%'}/>
                        </a>
                    </div>
                </div>

                <div className="contact-form-container">
                    <div className="contact-text">
                        <p>For any inquiries or bookings please fill out the form below:</p>
                    </div>
                    {isSubmitted ? (
                        <div className="thank-you-message">
                            <h2>Thank you for your message!</h2>
                            <p>We’ll get back to you as soon as possible.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                className="field"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <input
                                className="field"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <textarea
                                className="field"
                                name="message"
                                placeholder="Message"
                                cols="30"
                                rows="10"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <button type="submit">Send</button>
                        </form>
                    )}
                </div>

            </div>
        </div>

    );
}

export default Contact;

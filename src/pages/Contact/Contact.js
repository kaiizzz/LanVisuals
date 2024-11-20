import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { useUser } from '../../UserContext';

function Contact() {
    const { user } = useUser(); 
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Disable scrolling when the Home page is mounted
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling when the Home page is unmounted
        return () => {
          document.body.style.overflow = '';
        };
      }, []);


    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact</h1>
                <hr />
                <br />
                
                <div className="contact-apps">
                    <div className="contact-app">
                        <a href="https://www.instagram.com/">
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

                <div class="contact-form-container">
                <div className="contact-text">
                    <p>
                        For any inquiries or bookings please fill out the form below:
                    </p>
                </div>
                    <form class="contact-form">
                        <input class="field" type="text" placeholder="Name" required />
                        <br />
                        <input class="field" type="text" placeholder="Email" required />
                        <br />
                        <textarea class="field" placeholder="Message" cols="30" rows="10" required></textarea>
                        <br />
                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default Contact;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { useUser } from '../../UserContext';

function Contact() {
    const { user } = useUser(); 
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="contact-container">
            AQbout 
            <div className="contact-content">
                <h1>Contact</h1>
                <hr />
                <div className="contact-text">
                    <p>
                        Contact us at: <br />
                        Email: ccc
                        Phone: 123
                    </p>

                    <p>
            </p>
            </div>
        </div>

        </div>
    );
}

export default Contact;

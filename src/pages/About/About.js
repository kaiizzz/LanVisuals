import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { useUser } from '../../UserContext';

function About() {
    const { user } = useUser(); 
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="about-bg">
            <div className="about-container">
                <div className="about-content">
                    <h1>About Me: Xiaolan Yao</h1>
                    <div className="about-text">
                        <hr />
                        <p>
                            With a background rooted in music, l've always believed that all forms of art are interconnected. The precision and discipline I developed in music have seamlessly carried over to my work in photography. Since picking up my camera in Melbourne in 2014, I've been dedicated to my artistic journey, earning several photography awards along the way.

                            <br /><br />
                            I specialize in portrait and fine art photography, driven by a genuine interest in connecting with people. I enjoy listening to others' stories and have a knack for capturing those fleeting, intimate moments that reveal personal emotions and individuality. My imagination often takes me in unexpected directions, fueling my passion for creative expression.

                            <br /><br />
                            Collaboration excites me, and I look forward to opportunities to work with other departments to create more impactful and meaningful projects.
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

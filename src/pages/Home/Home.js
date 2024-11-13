// src/pages/Home.js
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import "./Typewriter.css";
import { useUser } from '../../UserContext';


const TypewriterText = () => {
    const [text, setText] = useState("");
    const fullText = "Welcome to Lanvisuals, Professional Potography Services";

    useEffect(() => {
        let index = 0;

        const typingEffect = () => {
            if (index < fullText.length) {
                setText(fullText.substring(0, index + 1));
                index++;
                setTimeout(typingEffect, 25); // Adjust typing speed here
            }
        };

        typingEffect(); // Start typing effect

        // Cleanup function if necessary (not strictly required here)
        return () => {};
    }, [fullText]); // Dependency on fullText to handle updates if needed

    return <p className="home-text31">{text}</p>;
};

function Home() {
    const { user } = useUser(); 

    useEffect(() => {
        // Disable scrolling when the Home page is mounted
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling when the Home page is unmounted
        return () => {
          document.body.style.overflow = '';
        };
      }, []);

    return (
        //<div className="home-container">
            <div className="main-content">
                <div class = "background-image">
                    {/* <img src="/image/lili.png" alt="Background" style={{ width: '100%', height: '100%' }} /> */}
                   
                </div>
                <div class = "overlay-colour">
                    
                </div>
                <div class = "overlay">
                        <div class="home-content">
                            <h1 className="home-text1"><img src="/image/LogoBlack.PNG" alt="Logo" style={{ width: '50%', height: '50%' }} /></h1>
                            {/* <h2 className="home-text2">姚 . 晓 . 兰</h2> */}
                            {/* <h3 className="home-text3"></h3> */}
                            <div className="home-text3">
                                <TypewriterText />
                            </div>
                            <div class = "home-text4">
                                    <Link to="/Gallery" className="home-button">Explore My Works</Link>
                                    <Link to="/Contact" className="home-button">Bookings</Link>
                            </div>

                        </div>
                    </div>
                
            </div>
        //</div>
  );
}

export default Home;
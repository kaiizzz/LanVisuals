import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './v.css';
import { useUser } from '../../../UserContext';

function Reflections_on_Dreams() {
    const { user } = useUser(); 
    const [isVisible, setIsVisible] = useState(false);

    // Show/Hide back-to-top button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const goToGallery = () => {
        window.location.href = '/Gallery';
    }

    useEffect(() => {
        // Disable horizontal scrolling
        document.body.style.overflowX = 'hidden';

        // Attach the scroll event listener
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <div className="gallery-container">
            <div className="gallery-content">
                <button className="back-button" onClick={scrollToTop} style={{textDecoration : "none"}}>
                    <Link to="/Gallery" style={{textDecoration : "none", color : 'white'}}>← Back to Gallery</Link>
                </button>
                <h1>Reflections on Dreams</h1>
                <p className='intro'>
                    <hr/>
                    <br/>
                    
                    “Reflections on Dreams” is a project I have long 
                    wanted to express through photography. I have always vividly remembered my past dreams. In my 
                    dreams, I would fly, I’ve encountered mountains 
                    full of snakes, and I’ve even transformed into a 
                    beetle. What surprises me is that when I discussed 
                    these dreams with friends, they shared that they 
                    had experienced similar dreamscapes. Psychologists believe that dreams serve as a gateway to the 
                    subconscious. The illogical and fantastical stories 
                    that unfold in dreams are said to conceal deep-
                    seated desires, memories, thoughts, and emotions.
                    Now, with the opportunity to immerse myself in 
                    this creative process, I feel a sense of joy, despite 
                    the tight timeframe. This is only the beginning. 
                    Through this project, I aim to open a window into 
                    the exploration of women’s dreams and the subconscious.

                    
                    <br/>
                    <br/>
                    <hr/>
                </p>
                <div className='gallery-images'>
                    <div className="gallery-image">
                        {Array.from({ length: 14 }, (_, i) => (
                            <div className="g-image" key={i}>
                                <img
                                    src={`/image/images2/rod/ro${i + 1}.jpg`}
                                    alt={`Image ${i + 1}`}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Back to Top Button */}
            {isVisible && (
                <div className="back-to-top" onClick={scrollToTop}>
                    ↑
                </div>
            )}
        </div>
    );
}

export default Reflections_on_Dreams;

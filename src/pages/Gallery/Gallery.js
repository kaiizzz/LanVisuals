import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { useUser } from '../../UserContext';

function Gallery() {
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
                <h1>Gallery</h1>
                <div className='gallery-images'>
                    <div className="gallery-image">
                        <div className="g-image">
                            <img src="/image/2.jpg" alt="Image 2" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/3.jpg" alt="Image 3" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/4.jpg" alt="Image 4" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/5.jpg" alt="Image 5" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/6.jpg" alt="Image 6" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/7.jpg" alt="Image 7" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/8.jpg" alt="Image 8" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/10.jpg" alt="Image 10" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/14.jpg" alt="Image 14" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/16.jpg" alt="Image 16" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/AutumnChrysanthemum.jpg" alt="Image 16" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/InTheForest.jpg" alt="Image 16" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/InTheForest2.jpg" alt="Image 16" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/TowardsTheSun.jpg" alt="Image 16" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            
            {/* Back to Top Button */}
            {isVisible && (
                <div className="back-to-top" onClick={scrollToTop}>
                    ↑
                </div>
            )}
        </div>
    );
}

export default Gallery;

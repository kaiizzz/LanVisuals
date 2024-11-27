import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './v.css';
import { useUser } from '../../../UserContext';

function Vogue_Entries() {
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
                <h1>Vogue Entries</h1>

                <div className='gallery-images'>
                    <div className="gallery-image">
                        <div className="g-image">
                            <img src="/image/images2/v1.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/v2.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/v3.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>

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

export default Vogue_Entries;

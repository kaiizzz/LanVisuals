import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './v.css';
import { useUser } from '../../../UserContext';

function Memories_of_Childhood() {
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
                <h1>Memories of Childhood</h1>
                <p className='intro'>
                    <hr/>
                    <br/>
                    
                    My photographic series Memories of Childhood is a recollection of a most beautiful time in my life, and as time passes, those memories become clearer and more engrained in my mind. The photos were inspired by memories of colourful trees, mountains in autumn, narcissus flowers in winter, the bamboo forest in front of my uncle's house, and my childhood friends. To make these images, I have used child models aged 5 to 15 to capture these memories, all dressed in Chinese style clothing such as QiPao and theatrical costumes representing Chinese culture and tradition and aligning with my traditional aesthetic.

                    
                    <br/>
                    <br/>
                    <hr/>
                </p>

                <div className='gallery-images'>
                    <div className="gallery-image">
                        <div className="g-image">
                            <img src="/image/images2/moc/m1.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m2.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m3.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m4.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m5.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m6.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m7.jpg" alt="Image 1" style={{ width: '100%' }} />
                        </div>
                        <div className="g-image">
                            <img src="/image/images2/moc/m8.jpg" alt="Image 1" style={{ width: '100%' }} />
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

export default Memories_of_Childhood;

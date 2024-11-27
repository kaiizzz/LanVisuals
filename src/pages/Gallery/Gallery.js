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

    // Array of images
    const images = [
        { src: '/image/images2/v1.jpg', alt: 'Image 1' },
        { src: '/image/images2/v2.jpg', alt: 'Image 2' },
        { src: '/image/images2/v3.jpg', alt: 'Image 3' },
    ];

    // State to track the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers to navigate between slides
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // // Automatically transition to the next slide
    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 10000); // Change slide every 5 seconds
    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, []);

    return (
        <div className="gallery-container">
            <div className="gallery-content">
                <h1>Gallery</h1>
                <div
                    className="gallery-slideshow"
                    style={{
                        position: 'relative',
                        maxWidth: '500px',
                        margin: 'auto',
                        overflow: 'hidden',
                        height: '600px', // Set a consistent height for the slideshow
                    }}
                >
                    <div className="slideshow-container" style={{ height: '100%'}}>
                        {images.map((image, index) => (
                            <div
                                className="mySlides fade"
                                key={index}
                                style={{
                                    display: currentIndex === index ? 'block' : 'none',
                                    height: '100%', // Ensure images fill the slideshow height
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Ensures consistent sizing without distortion
                                        borderRadius: '10px', // Optional: add rounded corners to the images
                                        
                                    }}
                                />
                            </div>
                        ))}

                        {/* Navigation buttons */}
                        <button
                            onClick={prevSlide}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '0',
                                transform: 'translateY(-50%)',
                                background: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0 5px 5px 0',
                                padding: '20px',
                                cursor: 'pointer',
                                zIndex: 1,
                                fontSize: '1em',
                            }}
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '0',
                                transform: 'translateY(-50%)',
                                background: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px 0 0 5px',
                                padding: '20px',
                                cursor: 'pointer',
                                zIndex: 1,
                                fontSize: '1em',
                            }}
                        >
                            ❯
                        </button>
                    </div>

                    {/* Dots to indicate the current slide */}
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        {images.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    height: '15px',
                                    width: '15px',
                                    margin: '0 5px',
                                    display: 'inline-block',
                                    backgroundColor: currentIndex === index ? 'black' : 'white',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
                <hr className='line'/>
                <div className="gallery-projects">
                
                    <h2>Projects</h2>
                    

                    <div className="gallery-project">
                        <Link to="/Gallery/Vogue_Entries" className="project-link" onClick={scrollToTop}>
                            <div className="project-image1">
                                {/* <img src="/image/images2/v1.jpg" alt="Project 1" style={{ width: '100%' }} /> */}
                                <div className = "image-overlay"><p className = "text">Vogue Entries</p></div>
                               
                            </div>
                        </Link>
                        <Link to="/Gallery/Memories_of_Childhood" className="project-link" onClick={scrollToTop}>
                            <div className="project-image2">
                                {/* <img src="/image/images2/v1.jpg" alt="Project 2" style={{ width: '100%' }} /> */}
                                <div className = "image-overlay"><p className = "text">Memories of Childhood</p></div>
                            </div>
                        </Link>
                        <Link to="/Gallery/Reflections_on_Dreams" className="project-link" onClick={scrollToTop}>
                            <div className="project-image3">
                                {/* <img src="/image/images2/v1.jpg" alt="Project 3" style={{ width: '100%' }} /> */}
                                <div className = "image-overlay">
                                    <p className = "text">Reflections on Dreams</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                        

                <div className='gallery-images'>
                    {/* <div className="gallery-image">
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
                    </div> */}
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

export default Gallery;

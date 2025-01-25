import React, { lazy, Suspense } from 'react';
import dart from '../../images/dart.png';
import flutter from '../../images/flutter.png';
import firebase from '../../images/firebase.png';
import "../css/Interesting.css";

const LazyImage = lazy(() => import('../LazyImage'));

function Interesting() {
    const images = [
        { src: dart, alt: 'Dart' },
        { src: flutter, alt: 'Flutter' },
        { src: firebase, alt: 'Firebase' }
    ];

    return (
        <div className='interesting'>
            <h6>Technologies I'm interested in</h6>
            <div className='interesting-images'>
                {images.map((image, index) => (
                    <Suspense fallback={<div key={index}>Loading...</div>} key={index}>
                        <LazyImage src={image.src} alt={image.alt} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
}

export default Interesting;

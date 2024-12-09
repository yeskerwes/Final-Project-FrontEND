import React from 'react';
import './styles/content.css'; 
import background from './images/background.mp4';

const Content = () => {
    return (
        <div className="video-container">
            <video 
                src={background} 
                autoPlay 
                muted 
                loop 
                playsInline
                />
        </div>
    );
};

export default Content;

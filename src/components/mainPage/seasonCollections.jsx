import React from 'react';
import './seasonCollections.css';
import springCard from '../images/spring-collection.png';
import autumnCard from '../images/autumn-collection.png';

const SeasonCollections = () => {
    return (
        <div className="season-container">
            <div className="season-card">
                <img src={springCard} alt="Spring Collection" />
                <button className="season-button">Spring Collections</button>
            </div>
            <div className="season-card">
                <img src={autumnCard} alt="Spring Collection" />
                <button className="season-button">Spring Collections</button>
            </div>
            <div className="season-card">
                <img src={springCard} alt="Spring Collection" />
                <button className="season-button">Spring Collections</button>
            </div>
        </div>
    );
};

export default SeasonCollections;

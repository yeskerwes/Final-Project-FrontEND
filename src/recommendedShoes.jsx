import React from 'react';
import './styles/recommendedShoes.css';
import image1 from './images/recommended-sneaker-1.png';

const RecommendedShoes = () => {
    return (
        <div className="recommended-container">
            <h1>Recommended Sneakers</h1>
            <div className="recommended-shoes">
                <div className="recommended-shoes-card">
                    <img src={image1} alt="Sneaker 1" />
                </div>
                <div className="recommended-shoes-card">
                    <img src={image1} alt="Sneaker 2" />
                </div>
                <div className="recommended-shoes-card">
                    <img src={image1} alt="Sneaker 3" />
                </div>
                <div className="recommended-shoes-card">
                    <img src={image1} alt="Sneaker 4" />
                </div>
            </div>
        </div>
    );
};

export default RecommendedShoes;

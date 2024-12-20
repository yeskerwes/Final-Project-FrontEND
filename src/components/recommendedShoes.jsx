import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/recommendedShoes.css';

const RecommendedShoes = () => {
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/sneakers/search?random=true&minPrice=10');
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                const randomSneakers = Array.isArray(data)
                    ? data.sort(() => 0.5 - Math.random()).slice(0, 10)
                    : [];
                setSneakers(randomSneakers);
            } catch (err) {
                setError(`Не удалось загрузить данные: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchSneakers();
    }, []);

    if (loading) {
        return <div className="recommended-container">Loading...</div>;
    }

    if (error) {
        return <div className="recommended-container">Error: {error}</div>;
    }

    const filteredSneakers = sneakers.filter(sneaker => sneaker.title);

    return (
        <div className="recommended-container">
            <h1>Recommended Sneakers</h1>
            <div className="recommended-shoes">
                {filteredSneakers.map((sneaker) => (
                    <SneakerCard sneaker={sneaker} key={sneaker.id} />
                ))}
            </div>
        </div>
    );
};

const SneakerCard = ({ sneaker }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let interval;

        if (hovered && sneaker.otherImages?.length > 0) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % sneaker.otherImages.length
                );
            }, 2000); 
        } else {
            setCurrentImageIndex(0); 
        }

        return () => clearInterval(interval); 
    }, [hovered, sneaker.otherImages]);

    if (!sneaker.title) return null;

    return (
        <div
            className="recommended-shoes-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to={`/sneakers/${sneaker.id}`}>
                <img
                    src={hovered && sneaker.otherImages?.length > 0
                        ? sneaker.otherImages[currentImageIndex] 
                        : sneaker.imageUrl 
                    }
                    alt={sneaker.title}
                />
            </Link>
            <div className="shoe-info">
                <p className="shoe-title">{sneaker.title}</p>
                <p className="shoe-subtitle">{sneaker.subtitle}</p>
                <p className="shoe-price">€{sneaker.currentPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default RecommendedShoes;

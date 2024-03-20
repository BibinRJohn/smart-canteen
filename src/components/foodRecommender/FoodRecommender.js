import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodRecommender = () => {
    const [selectedFood, setSelectedFood] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:6000/api/foods');
                setFoods(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFoods();
    }, []);

    const handleRecommend = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:6000/api/recommend', { food: selectedFood });
            setRecommendations(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ margin: '0 auto', width: '50%', textAlign: 'center' }}>
            <h1 style={{ color: '#4a4a4a' }}>Food Recommender System</h1>
            <select style={{ width: '100%', height: '40px', marginBottom: '10px' }} onChange={(e) => setSelectedFood(e.target.value)}>
                <option value="">Select a food item</option>
                {foods.map((food, index) => (
                    <option key={index} value={food}>{food}</option>
                ))}
            </select>
            <button style={{ width: '100%', height: '40px', marginBottom: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }} onClick={handleRecommend}>Recommend</button>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {recommendations.map((food, index) => (
                    <div key={index} style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '4px', marginBottom: '10px', flex: '0 0 30%' }}>
                        <img src={food.image_link} alt={food.name} style={{ width: '100%' }} />
                        <h2>{food.name}</h2>
                        <p>Price: {food.Price}</p>
                        <p>Rate: {food.rate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodRecommender;
import React, { useEffect, useState } from 'react'

function Prediction() {
    const [predictions, setPredictions] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/predictions')
            .then(response => response.json())
            .then(data => setPredictions(data));
    }, []);

    const days = Object.keys(predictions).length > 0 ? Object.keys(predictions[Object.keys(predictions)[0]]) : [];
    return (
        <div>
            <h1>Predictions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Food Item</th>
                        {Object.keys(predictions)?.map(foodItem => (
                            <th key={foodItem}>{foodItem}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, index) => (
                        <tr key={day}>
                            <td>{day}</td>
                            {Object.values(predictions)?.map(prediction => (
                                <td key={prediction[day]}>{prediction[day]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Prediction
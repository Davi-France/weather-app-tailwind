import React from 'react';

interface WeatherDisplayProps {
    weather: any;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold mb-2">{weather.location.name}</h2>
            <p className="text-gray-700">Temperature: {weather.current.temp_c}°C</p>
            <p className="text-gray-700">Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="mx-auto" />
        </div>
    );
};

export default WeatherDisplay;

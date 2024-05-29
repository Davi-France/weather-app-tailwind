import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a08998f63beb4be2bc9143710230707&q=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
        <WeatherForm onSearch={handleSearch} />
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </div>
  );
};

export default App;

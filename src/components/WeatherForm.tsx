import React, { useState } from 'react';
import '.././index.css'
interface WeatherFormProps {
    onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
    const [city, setCity] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                Search
            </button>
        </form>
    );
};

export default WeatherForm;

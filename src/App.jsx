import { SearchBar } from './Searchbar';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { WeatherCard } from './WeatherCard';

function App() {
  const api = '696598990b200ad5a517e1fdc980112f';

  const [city, setCity] = useState('Cherrapunji');
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forecastData, setForecastData] = useState([]);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`;

  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const searchweather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    setData(null);
    setForecastData([]);

    try {
      const weatherResponse = await axios.get(apiUrl);
      setData(weatherResponse.data);

      const forecastResponse = await axios.get(forecastUrl);
      const filteredForecast = forecastResponse.data.list.filter(
        (f) => f.dt_txt.includes('12:00:00')
      );
      setForecastData(filteredForecast);

      setSearchHistory((prev) => {
        const updated = [
          city,
          ...prev.filter((c) => c.toLowerCase() !== city.toLowerCase()),
        ].slice(0, 5);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
        return updated;
      });

      return weatherResponse.data;
    } catch (error) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newCity) => {
    setCity(newCity);
    searchweather();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar city={city} setCity={setCity} searchweather={searchweather} />

      {searchHistory.length > 0 && (
        <div className="mt-4 w-full max-w-md">
          <h3 className="text-md font-semibold text-blue-800 mb-2">Recent Searches:</h3>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCity(item);
                  handleSearch(item);
                }}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading && <div className="mt-8 text-lg text-blue-600 font-semibold">Loading...</div>}

      {error && <div className="mt-4 text-red-600 font-medium">{error}</div>}

      <WeatherCard Data={Data} forecastData={forecastData}></WeatherCard>
      
    </div>
  );
}

export default App;
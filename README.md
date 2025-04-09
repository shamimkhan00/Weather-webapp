# 🌦️ Weather Web App

A modern, responsive Weather Dashboard built using **React.js** and **Tailwind CSS**. It allows users to search for any city and view its **current weather**, a **5-day forecast**, and more — powered by the **OpenWeatherMap API**.

## 🚀 Features

- 🔍 Search for any city to get real-time weather data
- 🌡️ Current Weather Details (temperature, humidity, wind speed, conditions)
- 📅 5-Day / 3-Hour Forecast
- 🕘 Recent Search History (last 5 cities saved in localStorage)

## 📷 Preview

![screenshot](preview.png)

## 🧱 Built With

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shamimkhan00/Weather-webapp.git
cd Weather-webapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Create a `.env` file in the root and add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Don’t forget to replace `your_api_key_here` with your actual API key.

### 4. Run the App

```bash
npm run dev
```

The app will run at `http://localhost:5173/` (or another port).

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── ForecastCard.jsx
├── App.jsx
├── main.jsx
├── index.css
```

## 📌 API Reference

- **Current Weather**  
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

- **5-Day Forecast**  
  `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`

## 🔧 Future Improvements

- 🌍 Geolocation-based Weather
- 📈 Weather trends graph
- 🌐 Multiple language support

## 📃 License

This project is licensed under the MIT License.

---

Made with 💙 by [Shamim Khan](https://github.com/shamimkhan00)

# 🌤️ Weather Dashboard Application

A responsive and modern weather dashboard built with **React** and **Vite**, providing current weather information and a 5-day forecast for any city or your current location. Powered by the OpenWeatherMap API.

---

## 🚀 Tech Stack

- **Frontend**: React + Vite  
- **Styling**: CSS  
- **Assets & Icons**: Custom icons (wind, humidity, clouds), OpenWeatherMap weather icons  
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)  
- **Deployment**: [Vercel](https://vercel.com)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
git clone https://github.com/sancharigandhi/Weather-Dashboard-Application.git
cd Weather-Dashboard-Application


### 2. Install Dependencies


### 3. Configure Environment Variables

Create a `.env` file in the root of your project and add your OpenWeatherMap API key:
VITE_API_KEY=your_openweathermap_api_key


> Note: Vite requires environment variables to start with `VITE_`.

### 4. Start Development Server
npm run dev


### 5. Build for Production
npm run build


---

## 🌐 API Integration

This app uses the OpenWeatherMap API for weather data.

### ✅ Current Weather API

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
  - `q`: City name OR `lat` & `lon`
  - `appid`: Your API key
  - `units`: `metric` (for Celsius)

### ✅ 5-Day Forecast API

- **Endpoint**: `https://api.openweathermap.org/data/2.5/forecast`
- **Parameters**: Same as above

### ⚠️ Notes on API Usage

- Free Tier Limit: 60 API calls per minute  
- Rate Limit Policy: Monitor to avoid exceeding and receiving 429 errors  
- Response Format: JSON  
- Data Included: Temperature, humidity, wind speed, cloud cover, weather condition, and weather icons  
- Country Flags: Fetched using
https://flagsapi.com/{countryCode}/flat/64.png


---

## 📸 Features

- 🌍 View current weather using browser's Geolocation  
- 🔍 Search for any city worldwide  
- 🕒 5-day weather forecast (data every 3 hours)  
- 🌬️ Wind speed, humidity, and cloud coverage  
- 🏴 Country flag shown beside city name  
- ↻ Refreshable weather data  

---

## 📆 Deployment

The application is deployed on **Vercel**. Commits pushed to the `main` branch will trigger automatic deployments.

### Manual Deployment Steps:

1. Go to [vercel.com](https://vercel.com)  
2. Import your GitHub repository  
3. Add environment variable `VITE_API_KEY` in the Vercel dashboard  
4. Deploy the project  

---

## 🚀 Future Enhancements

- Dark/light theme toggle  
- Hourly weather forecast  
- UV index and precipitation data  
- More responsive design improvements  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Created with ❤️ by Sancharigandhi using React, Vite & OpenWeatherMap API.







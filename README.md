🌤️ Weather Dashboard ApplicationA responsive and modern weather dashboard built with React and Vite, providing current weather information and a 5-day forecast for any city or your current location. Powered by the OpenWeatherMap API.
🚀 Tech StackFrontend: React + Vite
Styling: CSS
Assets & Icons: Custom icons (wind, humidity, clouds), OpenWeatherMap weather icons
API: OpenWeatherMap API
Deployment: Vercel
⚙️ Setup Instructions1. Clone the Repositorygit clone https://github.com/sancharigandhi/Weather-Dashboard-Application.git
cd Weather-Dashboard-Application2. Install Dependenciesnpm install3. Configure Environment VariablesCreate a .env file in the root of your project and add your OpenWeatherMap API key:
VITE_API_KEY=your_openweathermap_api_keyNote: Vite requires environment variables to start with VITE_.
4. Start Development Servernpm run dev5. Build for Productionnpm run build🌐 API IntegrationThe app integrates with two endpoints from OpenWeatherMap:
✅ Current Weather APIEndpoint: https://api.openweathermap.org/data/2.5/weather
Parameters:
q: City name OR lat & lon
appid: Your API key
units: metric (for Celsius)
✅ 5-Day Forecast APIEndpoint: https://api.openweathermap.org/data/2.5/forecast
Parameters: Same as above
⚠️ Notes on API UsageFree Tier Limit: 60 calls/minute
Response Format: JSON
Data Included: Temperature, humidity, wind speed, cloud cover, weather condition, and icons
Country Flags: Derived using country code from API response (e.g., https://flagsapi.com/IN/flat/64.png)
📸 Features🌍 View current location weather using Geolocation API
🔍 Search for any city
⏪ View the last 5 searched cities
🕒 5-day weather forecast (every 3 hours, filtered)
🌬️ Weather details: wind speed, humidity, cloud coverage
🏴️ Country flag shown next to city
↻ Refreshable data
📆 DeploymentThis application is deployed on Vercel. Pushes to the main branch automatically trigger redeployments.
🚀 Future EnhancementsDark/light theme toggle
Hour-by-hour forecast
UV index and precipitation details
Enhanced mobile responsiveness
📄 LicenseThis project is licensed under the MIT License.
Created with ❤️ by Sancharigandhi using React, Vite & OpenWeatherMap API.


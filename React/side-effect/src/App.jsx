import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeatherdata();
  }, [weather]);

  const getWeatherdata=()=>{
    fetch('https://api.open-meteo.com/v1/forecast?latitude=21.1458&longitude=79.0882&current_weather=true')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeather(data.current_weather);
      })
      .catch(err => console.error('Error:', err));
  }

  return (
    <div>
      {weather ? (
        <div>
          <h2 style={{backgroundColor:"blue"}} >Weather</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Windspeed: {weather.windspeed} km/h</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}

      <Counter/>

      <Counter/>
    </div>
  );
}

export default App

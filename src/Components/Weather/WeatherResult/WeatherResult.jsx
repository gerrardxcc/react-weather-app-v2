import './WeatherResult.css';

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
};

const WeatherResult = (props) => {
  const location = props.weatherData.location;

  const weather = props.weatherData.current;
  const dateTime = new Date(location.localtime);

  return (
    <div>
      <div>
        <h2>
          {location.name}, {location.region}
        </h2>
        <p>{dateTime.toLocaleDateString('en-AU', options)}</p>
      </div>
      <ul>
        <li>
          <img src={weather.condition.icon} alt='weather condition icon' />
          <p>{weather.condition.text}</p>
        </li>
        <li>
          <p>Temp: {weather.temp_c}</p>
        </li>
        <li>
          <p>Wind: {weather.wind_kph}</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherResult;

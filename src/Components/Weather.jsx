import { useState } from 'react';
import './Weather.css';
import SearchCity from './Weather/SearchCity/SearchCity';
import WeatherResult from './Weather/WeatherResult/WeatherResult';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/esm/Spinner';

const Weather = () => {
  const [weather, setWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchHandler = (weatherData) => {
    setWeather(weatherData);
  };

  return (
    <>
      <Card className='text-center'>
        <Card.Header>
          <h1>🌤️Weather App V2</h1>
        </Card.Header>
        <Card.Body>
          <SearchCity search={onSearchHandler} setLoading={setIsLoading} />
          {isLoading ? (
            <Spinner />
          ) : (
            weather && <WeatherResult weatherData={weather} />
          )}
        </Card.Body>
        <Card.Footer className='text-muted'>By Gerrard Xiong</Card.Footer>
      </Card>
    </>
  );
};

export default Weather;

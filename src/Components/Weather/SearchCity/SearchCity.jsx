import { fetchWeatherByCity } from '../../../Services/weatherServices';
import './SearchCity.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchCity = (props) => {
  const [city, setCity] = useState('');

  const onCityInputHandler = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const onSearchCityHandler = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    try {
      const weatherData = await fetchWeatherByCity(city);
      props.search(weatherData);
    } catch (error) {
      console.log('Failed to fetch city weather due to error: ', error);
    } finally {
      props.setLoading(false);
    }
  };
  return (
    <Form onSubmit={onSearchCityHandler}>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          type='text'
          placeholder='Search a city...'
          value={city}
          onChange={onCityInputHandler}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Show air quality data' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Search
      </Button>
    </Form>
  );
};

export default SearchCity;

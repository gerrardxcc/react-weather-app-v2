const API_KEY = '';
const FETCH_CITY_WEATHER_URL = '';

export const fetchWeatherByCity = async (city) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);

  url.searchParams.append('key', API_KEY);
  url.searchParams.append('q', city);
  url.searchParams.append('api', 'false');

  const response = await fetch(url);
  const data = await response.json();

  return data;
};


import { fetchWeatherApi } from 'openmeteo';

const getWeather = async () => {
    const params = {
        latitude: -7.8906,
        longitude: 111.9853,
        current: 'temperature_2m',
        timezone: 'auto',
        forecast_days: 1,
    };
    const url = 'https://api.open-meteo.com/v1/forecast';
    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();

    const current = response.current()!;

    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
        },
    };

    return { weatherData };
};

export { getWeather };

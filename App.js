import React from 'react';
import axios from 'axios';
import { Alert } from 'react-native-web';
import * as Location from 'expo-location';

import { BASE_URL, API_KEY } from '@env';
import Loading from './Loading';
import Weather from './Weather';

export default class extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
						isLoading: true,
				};
		}

		getWeather = async (latitude, longitude) => {
				const { data } = await axios.get(`${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
				console.log(data);
				this.setState({
						isLoading: false,
						city: data.name,
						temp: data.main.temp,
						feels_like: data.main.feels_like,
						temp_max: data.main.temp_max,
						temp_min: data.main.temp_min,
						pressure: data.main.pressure,
						humidity: data.main.humidity,
						weather: data.weather[0].main,
						sunrise: data.sys.sunrise,
						sunset: data.sys.sunset,
						wind: data.wind.speed,
				});
		};

		getCurrentLocation = async () => {
				try {
						await Location.requestPermissionsAsync();
						const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

						await this.getWeather(latitude, longitude);

				} catch (e) {
						Alert.alert('Permission to access location was denied', '');
				}
		};

		componentDidMount() {
				this.getCurrentLocation();
		}

		render() {
				const {
						isLoading, temp, city, feels_like, pressure, weather, temp_max, temp_min, sunrise, sunset, wind, humidity
				} = this.state;

				return (
						isLoading
								? <Loading/>
								: <Weather
										temp={Math.round(temp)}
										city={city}
										feels_like={Math.round(feels_like)}
										pressure={pressure}
										weather={weather}
										temp_max={temp_max}
										temp_min={temp_min}
										sunrise={sunrise}
										sunset={sunset}
										wind={wind}
										humidity={humidity}
								/>
				);
		}

}


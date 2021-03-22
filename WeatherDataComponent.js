import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeatherDataComponent = ({ latitude, longitude }) => {
		const [weatherData, setWeatherData] = useState(null);

		useEffect(() => {
				fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`)
						.then(res => res.json())
						.then(data => setWeatherData(data));
		}, []);

		console.log(weatherData)

		return (
				<View style={styles.container}>
						<Text style={styles.text}>{latitude}</Text>
						<Text style={styles.text}>{longitude}</Text>
				</View>
		);
};

const styles = StyleSheet.create({
		container: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
		},
		text: {
				fontSize: 22,
				fontWeight: 'bold',
		},
});

export default WeatherDataComponent;

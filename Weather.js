import React from 'react';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { weatherOptions } from './weatherOptions';

const Weather = ({ temp, city, feels_like, pressure, weather, temp_max, temp_min, sunrise, sunset, wind, humidity }) => {
		const sunsetTime = format(new Date(fromUnixTime(sunset)), ['HH:mm']);
		const sunriseTime = format(new Date(fromUnixTime(sunrise)), ['HH:mm']);

		return (
				<LinearGradient
						colors={weatherOptions[weather].gradient}
						style={styles.container}>
						<StatusBar barStyle="light-content" />
						<View style={styles.headerContainer}>
								<Text style={styles.city}>{city}</Text>
								<Text style={styles.other}>{weather}</Text>
								<Text style={styles.temp}>{temp}<MaterialCommunityIcons name='temperature-celsius' size={55}/></Text>
								<View style={styles.rowHeaderContainer}>
										<View style={styles.columnHeaderContainer1}>
												<Text style={styles.infoText}>
														H : {Math.round(temp_max)}
														<MaterialCommunityIcons name='temperature-celsius' size={20}/>
												</Text>
										</View>
										<View style={styles.columnHeaderContainer2}>
												<Text style={styles.infoText}>
														L : {Math.round(temp_min)}
														<MaterialCommunityIcons name='temperature-celsius' size={20}/>
												</Text>
										</View>
								</View>
						</View>

						<View style={styles.bottomContainer}>

								<View style={styles.rowContainer}>
										<View style={styles.columnContainer}>
												<Text style={styles.infoTitle}>SUNRISE</Text>
												<Text style={styles.infoText}>{sunriseTime}</Text>
										</View>
										<View style={styles.columnContainer}>
												<Text style={styles.infoTitle}>SUNSET</Text>
												<Text style={styles.infoText}>{sunsetTime}</Text>
										</View>
								</View>

								<View style={styles.rowContainer}>
										<View style={styles.columnContainer}>
												<Text style={styles.infoTitle}>WIND</Text>
												<Text style={styles.infoText}>{wind} m/s</Text>
										</View>
										<View style={styles.columnContainer}>
												<Text style={styles.infoTitle}>FEELS LIKE</Text>
												<Text style={styles.infoText}>{feels_like}
														<MaterialCommunityIcons name='temperature-celsius' size={20}/>
												</Text>
										</View>
								</View>

								<View style={styles.rowContainer}>
										<View style={styles.columnContainer}>
												<Text style={styles.infoTitle}>PRESSURE</Text>
												<Text style={styles.infoText}>{pressure} hPa</Text>
										</View>
										<View style={styles.columnContainer}>
												<Text style={styles.infoTitle}>HUMIDITY</Text>
												<Text style={styles.infoText}>{humidity} %</Text>
										</View>
								</View>

						</View>
				</LinearGradient>
		);
};

const styles = StyleSheet.create({
		container: {
				flex: 1,
		},
		headerContainer: {
				flex: 2,
				alignItems: 'center',
				justifyContent: 'center',
		},
		bottomContainer: {
				flex: 1,
				borderTopWidth: 1,
				borderTopColor: 'silver'
		},
		rowHeaderContainer: {
				flexDirection: 'row',
		},
		columnHeaderContainer1: {
				alignItems: 'flex-end',
				paddingRight: 10,
		},
		columnHeaderContainer2: {
				alignItems: 'flex-start',
				paddingLeft: 10,
		},
		rowContainer: {
				flex: 1,
				flexDirection: 'row',
				borderBottomWidth: 1,
				borderBottomColor: 'silver'
		},
		columnContainer: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
		},
		city: {
				fontSize: 45,
				fontWeight: 'bold',
				color: 'white'
		},
		temp: {
				fontSize: 55,
				fontWeight: 'bold',
				color: 'white'
		},
		other: {
				fontSize: 35,
				fontWeight: 'bold',
				color: 'white'
		},
		infoTitle: {
				fontSize: 15,
				color: 'silver'
		},
		infoText: {
				fontSize: 20,
				fontWeight: 'bold',
				color: 'white'
		},
});

export default Weather;

// expo-linear-gradient - expected version range: ~8.4.0

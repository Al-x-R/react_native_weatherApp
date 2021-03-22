import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';

const Weather = ({ temp, city, feels_like, pressure, weather, temp_max, temp_min, sunrise, sunset, wind, humidity }) => {
		const sunsetTime = format(new Date(fromUnixTime(sunset)), ['HH:mm']);
		const sunriseTime = format(new Date(fromUnixTime(sunrise)), ['HH:mm']);

		return (
				<View style={styles.container}>
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

				</View>
		);
};

const styles = StyleSheet.create({
		container: {
				flex: 1,
		},
		headerContainer: {
				flex: 2,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
				// borderWidth: 1,
		},
		bottomContainer: {
				flex: 1,
				backgroundColor: '#fff',
				borderTopWidth: 1,
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
		},
		columnContainer: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
		},
		city: {
				fontSize: 45,
				fontWeight: 'bold',
		},
		temp: {
				fontSize: 55,
				fontWeight: 'bold',
		},
		other: {
				fontSize: 35,
				fontWeight: 'bold',
		},
		infoTitle: {
				fontSize: 15,
		},
		infoText: {
				fontSize: 20,
				fontWeight: 'bold',
		},
});

export default Weather;

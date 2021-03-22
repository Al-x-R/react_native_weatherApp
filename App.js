import React from 'react';
import { Alert } from 'react-native-web';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';

import Loading from './Loading';
import WeatherDataComponent from './WeatherDataComponent';

export default class extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
						isLoading: true,
						latitude: '',
						longitude: ''
				};
		}

		getCurrentLocation = async () => {
				try {
						await Location.requestPermissionsAsync();
						const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

						if (latitude && longitude) {
								this.setState({
										isLoading: false,
										latitude,
										longitude
								});
						}

				} catch (e) {
						Alert.alert('Permission to access location was denied', '');
				}
		};

		componentDidMount() {
				this.getCurrentLocation();
		}

		render() {
				const { isLoading, latitude, longitude } = this.state;

				return (
						isLoading ? <Loading/> : <WeatherDataComponent latitude={latitude} longitude={longitude}/>
				);
		}

}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
		},
});

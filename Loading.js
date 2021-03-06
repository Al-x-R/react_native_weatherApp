import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = () => {
		return (
				<View style={styles.container}>
						<Text style={styles.text}>Weather data loading...</Text>
				</View>
		);
};

const styles = StyleSheet.create({
		container: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
		},
		text: {
				fontSize: 22,
				fontWeight: 'bold'
		}
});

export default Loading;

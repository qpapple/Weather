import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import PropTypes from "prop-types"

/*export default class Weather extends Component {
	render() {
		return (
			<LinearGradient colors={["#00c6fb", "#005bea"]} style={styles.container}>
				<View  style={styles.upper}>
					<Ionicons color="white" size={125} name="ios-rainy" />
					<Text style={styles.temp}>35</Text>
				</View>
				<View  style={styles.lower}>
					<Text style={styles.title}>비가 옴</Text>
					<Text style={styles.subtitle}>야외활동을 자제합시다.</Text>
				</View>
			</LinearGradient>
		);
	}
}*/

const weatherCases = {
	Rain: {
		colors: ["#00c6fb", "#005bea"],
		title: '비온다!',
		subtitle: '우산 챙겨라',
		icon: 'weather-pouring'
	},
	Clear: {
		colors: ["#fef253", "#ff7300"],
		title: '화창하다!',
		subtitle: '반차쓰고 놀러가자~',
		icon: 'weather-sunny'
	},
	Thunderstorm: {
		colors: ["#00ecbc", "#007adf"],
		title: '천둥번개치네?',
		subtitle: '아 피곤해.. 오늘은 칼퇴!',
		icon: 'weather-lightning'
	},
	Clouds: {
		colors: ["#d7d2cc", "#304352"],
		title: '흐림',
		subtitle: '덥지않아 좋군',
		icon: 'weather-cloudy'
	},
	Drizzle: {
		colors: ["#89f7fe", "#66a6ff"],
		title: '이슬비',
		subtitle: '파전에 막걸리 콜?',
		icon: 'weather-rainy'
	},
	Haze: {
		colors: ["#999", "#fff"],
		title: '안개',
		subtitle: '운전 조심!!',
		icon: 'weather-fog'
	},
	Mist: {
		colors: ["#00c6fb", "#bdecf9"],
		title: '안개비',
		subtitle: '우산을 가져가야하나 말아야하나..',
		icon: 'weather-hail'
	},
	Snow: {
		colors: ["#7de2fc", "#b9b6e5"],
		title: '눈온다!',
		subtitle: '출퇴근길 빙판길 조심',
		icon: 'weather-snowy'
	}
}

function Weather( {temp, weatherName, location} ) {
	//console.log(weatherName)
	return (
		<LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
			<View  style={styles.upper}>
				<MaterialCommunityIcons color="white" size={125} name={weatherCases[weatherName].icon} />
				<Text style={styles.temp}>{temp}</Text>
				<Text style={styles.loction}>{location}</Text>
			</View>
			<View  style={styles.lower}>
				<Text style={styles.title}>{weatherCases[weatherName].title}</Text>
				<Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherName : PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
	container : {
		flex: 1
	},
	upper : {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	temp : {
		fontSize: 48,
		backgroundColor: "transparent",
		color: "white",
		marginTop : 10
	},
	loction : {
		fontSize:20,
		color : 'white'
	} ,
	lower: {
		flex:1,
		alignItems: "flex-start",
		justifyContent: "flex-end",
		paddingLeft: 25

	},
	title: {
		fontSize:38,
		fontWeight: "300",
		backgroundColor: "transparent",
		color: "white",
		marginBottom:24
	},
	subtitle: {
		fontSize:24,
		backgroundColor: "transparent",
		color: "white",
		marginBottom: 24
	}

});
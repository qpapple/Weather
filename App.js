import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import  Weather from "./Weather";

const API_KEY = "944214f93df634d26ed7921d3b2ce5cf";

export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    temperature : null,
    name: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
       this._getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error:error
      })
    }
    );
  }
  _getWeather = (lat, long) => {
  	fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
  	.then(response => response.json())
  	.then(json => {
  		console.log(json)
		this.setState({
			temperature:json.main.temp,
			name:json.weather[0].main,
                     location: json.name,
			isLoaded: true
		})
  	});
  };
  render() {
    const { isLoaded, error, temperature, name, location } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
          { isLoaded ? (
              <Weather location={location} weatherName={name} temp={Math.round(temperature - 273.15)} />
            ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>날씨를 불러오는 중...</Text>
              {error ? <Text style={styles.errorText}> {error} </Text> : null}
            </View>
          )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText : {
    color: "red",
    backgroundColor: "transparent",
  },
  loading: {
    flex:1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
  },
  loadingText : {
    fontSize: 15,
    textAlign: 'center',
    marginBottom : 100
  }
});

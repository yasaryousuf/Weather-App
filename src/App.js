import React from "react";
// import axios from "axios";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

import { API_KEY, URL } from "./data/Api";

class App extends React.Component {
  state = {
    temperature: 0,
    city: "",
    country: "",
    humidity: 0,
    description: "",
    error: ""
  };

  getWeather = e => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    fetch(`${URL}?q=${city},${country}&appid=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          temperature: myJson.main.temp,
          city: myJson.name,
          country: myJson.sys.country,
          humidity: myJson.main.humidity,
          description: myJson.weather[0].description
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;

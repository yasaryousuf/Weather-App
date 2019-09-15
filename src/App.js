import React from "react";
// import axios from "axios";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

import { API_KEY, URL } from "./data/Api";

class App extends React.Component {
  state = {
    temperature: 0,
    city: "Dhaka",
    country: "Bangladesh",
    humidity: 0,
    description: "",
    icon: "",
    error: ""
  };

  componentDidMount() {
    this.getWeather();
  }

  setCity = e => {
    e.preventDefault();

    this.setState({
          city: e.target.elements.city.value,
          country: e.target.elements.country.value,
        });

        this.getWeather(    )
      
  }

  getWeather = () => {
    fetch(`${URL}?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          temperature: myJson.main.temp,
          city: myJson.name,
          country: myJson.sys.country,
          humidity: myJson.main.humidity,
          icon: myJson.weather[0].icon,
          description: myJson.weather[0].description
        });
      });
  };

  handleChange = e => {
      this.setState({
        [e.target.name] : e.target.value
      });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form 
            city={this.state.city} 
            country={this.state.country} 
            setCity={this.setCity} 
            handleChange={this.handleChange}
            />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;

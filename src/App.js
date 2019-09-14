import React from "react";
// import axios from "axios";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

import { API_KEY, URL } from "./data/Api";

class App extends React.Component {

    state = {
        temperature: 0,
        city: '',
        country: '',
        humidity: 0,
        description: '',
    }

    getWeather = (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        let country = e.target.elements.country.value;
        fetch(`${URL}?q=${city},${country}&appid=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });

    };

    render() {
        return ( 
            <div className ="App">
                <Title/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;
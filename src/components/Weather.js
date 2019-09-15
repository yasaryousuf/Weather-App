import React from "react";

import {  ICON_URL } from "../data/Api";
class Weather extends React.Component {
  render() {
    return (
      <div>
         
<div className="container">
  <div className="card img-fluid" style={{width: 500}}>
    <img className="card-img-top" src="https://s-media-cache-ak0.pinimg.com/564x/cf/1e/c4/cf1ec4b0c96e59657a46867a91bb0d1e.jpg" alt="Card image"/>
    <div className="card-img-overlay">
      <h1 className="card-title description" style={{textTransform: 'capitalize'}}>{this.props.description}</h1>
      <h4 className="card-title">{this.props.city}, {this.props.country}</h4>
      <img className="" src={`${ICON_URL}${this.props.icon}.png`} alt="Card image"/>
      <h1 className="card-title">{this.props.temperature}°C</h1>
      <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default Weather;

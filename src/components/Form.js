import React from "react";
import { format } from "url";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input name="city" type="text" placeholder="city ..."/>
        <input type="text" name="country" placeholder="country ..." />
        <input type="submit" value="Get Weather"/>
      </form>
    );
  }
}

export default Form;

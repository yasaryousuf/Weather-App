import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.setCity}>
        <input value={this.props.city} name="city" type="text" placeholder="city ..." onChange={this.props.handleChange} required/>
        <input value={this.props.country} type="text" name="country" placeholder="country ..." onChange={this.props.handleChange} required/>
        <input type="submit" value="Get Weather"/>
      </form>
    );
  }
}

export default Form;

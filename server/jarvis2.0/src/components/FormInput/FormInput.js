import "./FormInput.css";
import "../../App.css";
import "../../index.css";

import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  // Setting the component's initial state
  state = {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    radius: "", 
    procedure: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (     
        <form className="form">
          <input
          className="address"
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter your address"
          />
          <br></br>
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
          />
          <br></br>
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleInputChange}
            type="text"
            placeholder="State"
          />
          <br></br>
           <input
            value={this.state.zipCode}
            name="zipCode"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Zip Code"
          />
          <br></br>
            <input
            value={this.state.radius}
            name="radius"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search Radius"
          />
          <br></br>
            <input
            value={this.state.procedure}
            name="procedure"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Procedure list here"
          />
          <br></br>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
   
    );
  }
}

export default FormInput;
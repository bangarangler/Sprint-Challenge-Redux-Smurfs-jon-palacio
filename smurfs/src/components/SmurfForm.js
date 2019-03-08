import React from "react";

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddSmurfy({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Smurf Name..."
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Smurf Age..."
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Smurf Height..."
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

export default SmurfForm;

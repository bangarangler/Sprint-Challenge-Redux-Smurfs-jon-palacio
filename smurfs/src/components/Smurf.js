import React from "react";

class Smurf extends React.Component {
  state = {
    name: this.props.smurf.name,
    age: this.props.smurf.age,
    height: this.props.smurf.height
  };

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.name}</h2>
        <p>{this.state.age}</p>
        <p>{this.state.height}</p>
      </React.Fragment>
    );
  }
}

export default Smurf;

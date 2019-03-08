import React from "react";

class Smurf extends React.Component {
  state = {
    name: this.props.smurf.name,
    age: this.props.smurf.age,
    height: this.props.smurf.height
  };

  render() {
    return <React.Fragment />;
  }
}

export default Smurf;

//<h2>{name}</h2>
//<p>{age}</p>
//<p>{height}</p>

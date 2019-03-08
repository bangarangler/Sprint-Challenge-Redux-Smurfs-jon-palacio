import React from "react";

import Smurf from "./Smurf";

class SmurfyList extends React.Component {
  render() {
    return (
      <div>
        <h1>Smurfy Village</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.name} />
        ))}
      </div>
    );
  }
}

export default SmurfyList;

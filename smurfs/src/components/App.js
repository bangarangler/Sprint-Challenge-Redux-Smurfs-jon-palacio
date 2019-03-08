import React, { Component } from "react";
import "./App.css";

import SmurfyList from "./SmurfyList.js";
import SmurfForm from "./SmurfForm.js";
import { connect } from "react-redux";

import { getSmurfys, addSmurfy } from "../actions/";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfys();
  }

  handleAddSmurfy = ({ name, age, height }) => {
    //this.props.handleSubmit({ name, age, height });
    this.props.addSmurfy({ name, age, height });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfyList smurfs={this.props.smurfs} />
        <SmurfForm handleAddSmurfy={this.handleAddSmurfy} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfys, addSmurfy }
)(App);

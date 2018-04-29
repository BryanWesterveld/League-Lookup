import React, { Component } from "react";
import { API_KEY } from "../hidden/api_keys";

class App extends Component {
  render() {
    return <div>Basic component, key is: {API_KEY}</div>;
  }
}

export default App;

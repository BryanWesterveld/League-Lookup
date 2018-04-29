import React, { Component } from "react";

import SearchBar from "./search_bar";


class App extends Component {
  render() {
    return <SearchBar history={this.props.history} />
  }
}

export default App;

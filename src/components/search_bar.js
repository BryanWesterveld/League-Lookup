import React, { Component } from "react";
import { fetchId } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", server: "euw1"};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onInputChange(event) {
    this.setState({name: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    //this.props.fetchId(this.state.name, this.state.server);
    const path = `/${this.state.server}/summoner/${this.state.name}`;
    this.props.history.push(path);
    this.setState({name: ""});
  }

  onSelectChange(event) {
    this.setState({server: event.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.name} placeholder="Enter a name" onChange={this.onInputChange} type="text" name="name"/>
          <select onChange={this.onSelectChange}>
            <option value="euw1">EUW</option>
            <option value="na1">NA</option>
          </select>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {fetchId})(SearchBar);

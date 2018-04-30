import React, { Component } from "react";
import { fetchId } from "../actions/index";
import { connect } from "react-redux";

class SummonerPage extends Component {
  componentDidMount() {
    this.props.fetchId(this.props.match.params.name, this.props.match.params.server);
  }

  render() {
    const summoner = this.props.ids[this.props.match.params.name];
    if(!summoner) {
      return <div>Waiting for summoner, does it exist yet?</div>;
    }

    return <div>Summoner page for {summoner.name}</div>;
  }
}

function mapStateToProps(state) {
  return { ids : state.ids };
}

export default connect(mapStateToProps, {fetchId})(SummonerPage);

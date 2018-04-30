import React, { Component } from "react";
import { fetchId } from "../actions/index";
import { connect } from "react-redux";
import MatchHistory from "./match_history";

class SummonerPage extends Component {
  componentDidMount() {
    this.props.fetchId(this.props.match.params.name, this.props.match.params.server);
  }

  render() {
    const summoner = this.props.ids[this.props.match.params.name];
    if(!summoner) {
      return <div>Waiting for summoner, does it exist yet?</div>;
    }

    return(
      <div>
      Summoner page for {summoner.name}
      <MatchHistory id={summoner.accountId} server={this.props.match.params.server} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ids : state.ids };
}

export default connect(mapStateToProps, {fetchId})(SummonerPage);

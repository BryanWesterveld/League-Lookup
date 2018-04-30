import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMatchHistory } from "../actions/index";

class MatchHistory extends Component {
  componentDidMount() {
    this.props.fetchMatchHistory(this.props.id, this.props.server);
  }

  render() {
    return(
      <div>Match history</div>
    );
  }
}

export default connect(null, { fetchMatchHistory })(MatchHistory);

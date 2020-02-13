import React from "react";
import SearchPresent from "./SearchPresent";

export default class SearchContainer extends React.Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;
    return <SearchPresent loading={loading} />;
  }
}

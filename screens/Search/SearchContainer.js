import React from "react";
import SearchPresent from "./SearchPresenter";
import { moviesApi, tvApi } from "../../Api";

export default class SearchContainer extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: ""
  };

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    let movieResults, tvResults, error;
    if (searchTerm !== "") {
      this.setState({
        loading: true
      });

      try {
        ({
          data: { results: movieResults }
        } = await moviesApi.search(searchTerm));
        ({
          data: { results: tvResults }
        } = await tvApi.search(searchTerm));
      } catch {
        error = "Can't Search";
      } finally {
        this.setState({
          loading: false,
          movieResults,
          tvResults,
          error
        });
      }
    }
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresent
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        onSubmitEditing={this.onSubmitEditing}
        handleSearchUpdate={this.handleSearchUpdate}
      />
    );
  }
}

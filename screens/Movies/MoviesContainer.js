import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../Api";

export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowplaying: null,
    error: null
  };

  async componentDidMount() {
    let upcoming, popular, nowplaying, error;
    try {
      ({
        data: { results: upcoming }
      } = await moviesApi.upComing());
      ({
        data: { results: popular }
      } = await moviesApi.popular());
      ({
        data: { results: nowplaying }
      } = await moviesApi.nowPlaying());
    } catch (error) {
      console.log(error);
      error;
    } finally {
      this.setState({ loading: false, error, upcoming, popular, nowplaying });
    }
  }

  render() {
    const { loading, upcoming, popular, nowplaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popular={popular}
        nowplaying={nowplaying}
      />
    );
  }
}

import React from "react";
import PropTypes from "prop-types";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../Api";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overView
          }
        }
      }
    } = props;
    this.state = {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overView,
      loading: true
    };
  }

  async componentDidMount() {
    const { isMovie, id } = this.state;
    let error, genres, overView, status, date, backgroundPhoto;
    try {
      if (isMovie) {
        ({
          data: {
            genres,
            overview: overView,
            status,
            release_date: date,
            backdrop_path: backgroundPhoto
          }
        } = await moviesApi.movieDetail(id));
      } else {
        ({
          data: {
            genres,
            overview: overView,
            status,
            release_date: date,
            backdrop_path: backgroundPhoto
          }
        } = await tvApi.tvShowDetail(id));
      }
    } catch (err) {
      error = err;
    } finally {
      this.setState({
        loading: false,
        genres,
        overView,
        status,
        date,
        backgroundPhoto
      });
    }
  }

  render() {
    const {
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overView,
      loading
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overView={overView}
        loading={loading}
      />
    );
  }
}

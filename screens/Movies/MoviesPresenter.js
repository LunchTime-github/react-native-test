import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ loading, upcoming, popular, nowplaying }) =>
  loading ? <Loader /> : <Text>Movies</Text>;

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowplaying: PropTypes.array
};

export default MoviesPresenter;

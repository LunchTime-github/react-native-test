import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MoiveSlider from "../../components/MovieSlider";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowplaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MoiveSlider movies={nowplaying} />
      <Text>Movies</Text>
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowplaying: PropTypes.array
};

export default MoviesPresenter;

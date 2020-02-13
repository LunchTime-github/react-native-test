import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MoiveSlider from "../../components/MovieSlider";
import { BG_COLOR } from "../../constants/Colors";
import Seciton from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowplaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowplaying ? <MoiveSlider movies={nowplaying} /> : null}
      {upcoming ? (
        <Seciton title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
                overview={movie.overview}
              />
            ))}
        </Seciton>
      ) : null}
      {popular ? (
        <Seciton title="Popular Movies" horizontal={false}>
          {popular
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
                horizontal={true}
                overview={movie.overview}
              />
            ))}
        </Seciton>
      ) : null}
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowplaying: PropTypes.array
};

export default MoviesPresenter;

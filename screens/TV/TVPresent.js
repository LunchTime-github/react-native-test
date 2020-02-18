import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../components/Loader";
import { BG_COLOR } from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresent = ({ loading, popular, airingThisWeek, airingtoday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingtoday ? (
        <Section title="Airing Today">
          {airingtoday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                overview={tv.overview}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
      {airingThisWeek ? (
        <Section title="Airing This Week">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                overview={tv.overview}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular TV Show" horizontal={false}>
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                overview={tv.overview}
                horizontal={true}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TVPresent.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  airingThisWeek: PropTypes.array,
  airingtoday: PropTypes.array
};

export default TVPresent;

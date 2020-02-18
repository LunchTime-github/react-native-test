import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { TINT_COLOR } from "../constants/Colors";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: ${props => (props.big ? "12px" : "14px")};
  margin: 5px 0;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  padding-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
  flex: 1;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-top: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview,
  isMovie = true,
  navigation
}) => (
  <TouchableWithoutFeedback
    onPress={() =>
      navigation.navigate({
        routeName: "Detail",
        params: {
          isMovie,
          id,
          posterPhoto,
          backgroundPhoto: null,
          title,
          voteAvg,
          overview
        }
      })
    }
  >
    {horizontal ? (
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title big={true}>{title}</Title>
          <MovieRating votes={voteAvg} />
          {overview ? (
            <Overview>
              {overview.length > 160
                ? `${overview.substring(0, 160)}...`
                : overview}
            </Overview>
          ) : null}
        </Column>
      </HContainer>
    ) : (
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 15 ? `${title.substring(0, 15)}...` : title}
        </Title>
        <MovieRating votes={voteAvg} />
      </Container>
    )}
  </TouchableWithoutFeedback>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string,
  isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);

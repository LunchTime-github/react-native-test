import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { BG_COLOR, TINT_COLOR, GREY_COLOR } from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.View`
  background-color: ${BG_COLOR};
  padding-bottom: 20px;
`;

const InputContainer = styled.View`
  align-items: center;
  padding: 0 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 5px 10px;
  border-bottom-color: ${GREY_COLOR};
  border-bottom-width: 1px;
  color: ${TINT_COLOR};
  font-size: 16px;
  text-align: center;
`;

const SearchResults = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing
}) => (
  <>
    <Container>
      <InputContainer>
        <Input
          placeholder="Search Movie and TV"
          placeholderTextColor={GREY_COLOR}
          onChangeText={handleSearchUpdate}
          value={searchTerm}
          returnKeyType={"search"}
          onSubmitEditing={onSubmitEditing}
          autoCorrect={false}
        />
      </InputContainer>
    </Container>
    <SearchResults>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults ? (
            movieResults.length > 0 ? (
              <Section title="Movie Results">
                {movieResults
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
              </Section>
            ) : null
          ) : null}
          {tvResults ? (
            tvResults.length > 0 ? (
              <Section title="TV Results">
                {tvResults
                  .filter(tv => tv.poster_path !== null)
                  .map(tv => (
                    <MovieItem
                      key={tv.id}
                      id={tv.id}
                      posterPhoto={tv.poster_path}
                      title={tv.name}
                      voteAvg={tv.vote_average}
                      overview={tv.overview}
                    />
                  ))}
              </Section>
            ) : null
          ) : null}
        </>
      )}
    </SearchResults>
  </>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;

import React from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import makePhotoUrl from "../../utils/makePhotoUrl";
import MoviePoster from "../../components/MoviePoster";
import MovieRating from "../../components/MovieRating";
import Loader from "../../components/Loader";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const BgImage = styled.Image`
  width: 100%;
  height: ${Layout.height / 3}px;
  opacity: 0.4;
  position: absolute;
  top: 0;
`;

const Header = styled.View`
  position: relative;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: 30px;
`;

const Column = styled.View`
  flex: 1;
  margin: 0 20px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-weight: 700;
  margin-bottom: 10px;
`;

const MainContent = styled.View`
  background-color: ${BG_COLOR};
  padding: 0 20px;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  line-height: 18px;
`;

const DetailPresenter = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overView,
  loading
}) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
      <LinearGradient
        colors={["transparent", BG_COLOR]}
        start={[0, 0]}
        end={[0, 0.8]}
      >
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>{title}</Title>
            <MovieRating inSlide={true} votes={voteAvg} />
          </Column>
        </Content>
      </LinearGradient>
    </Header>
    <MainContent>
      {loading ? <Loader /> : null}
      {overView ? (
        <>
          <Title>OverView</Title>
          <Overview>{overView}</Overview>
        </>
      ) : null}
    </MainContent>
  </Container>
);

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string,
  backgroundPhoto: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  overview: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;

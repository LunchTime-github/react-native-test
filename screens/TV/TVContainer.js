import React from "react";
import TVPresent from "./TVPresent";
import { tvApi } from "../../Api";

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    toprated: null,
    airingtoday: null,
    error: null
  };

  async componentDidMount() {
    let popular, toprated, airingtoday, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.popular());
      ({
        data: { results: toprated }
      } = await tvApi.topRated());
      ({
        data: { results: airingtoday }
      } = await tvApi.airingToday());
    } catch (error) {
      console.log(error);
      error;
    } finally {
      this.setState({
        loading: false,
        popular,
        toprated,
        airingtoday,
        error
      });
    }
  }

  render() {
    const { loading, popular, toprated, airingtoday } = this.state;
    return (
      <TVPresent
        loading={loading}
        popular={popular}
        toprated={toprated}
        airingtoday={airingtoday}
      />
    );
  }
}

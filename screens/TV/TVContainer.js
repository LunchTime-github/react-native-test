import React from "react";
import TVPresent from "./TVPresent";
import { tvApi } from "../../Api";

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingtoday: null,
    error: null
  };

  async componentDidMount() {
    let popular, airingThisWeek, airingtoday, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.popular());
      ({
        data: { results: airingThisWeek }
      } = await tvApi.airingThisWeek());
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
        airingThisWeek,
        airingtoday,
        error
      });
    }
  }

  render() {
    const { loading, popular, airingThisWeek, airingtoday } = this.state;
    return (
      <TVPresent
        loading={loading}
        popular={popular}
        airingThisWeek={airingThisWeek}
        airingtoday={airingtoday}
      />
    );
  }
}

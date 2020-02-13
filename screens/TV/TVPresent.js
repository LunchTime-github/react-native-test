import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const TVPresent = ({ loading, popular, toprated, airingtoday }) =>
  loading ? <Loader /> : <Text>TV</Text>;

TVPresent.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  toprated: PropTypes.array,
  airingtoday: PropTypes.array
};

export default TVPresent;

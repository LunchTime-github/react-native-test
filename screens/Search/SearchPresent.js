import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const SearchPresent = ({loading}) => loading ? <Loader /> : <Text>Search</Text>;

SearchPresent.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default SearchPresent;
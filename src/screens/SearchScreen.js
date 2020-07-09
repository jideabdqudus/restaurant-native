import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        searchApi={() => searchApi(term)}
      />
      <Text>{results.length}</Text>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

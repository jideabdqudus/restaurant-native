import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import { set } from "react-native-reanimated";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
    console.log("pasta");
  };

  const onTermChange = (newTerm) => {
    setTerm(newTerm);
  };

  const onTermSubmit = () => {
    console.log(`Submitted Nigga`);
    setTerm("");
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} searchApi={searchApi} />
      <Text>
        The amount of results for {term} are: {results.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsLists from "../components/ResultsLists";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
    console.log("Hi There");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Someting went Wrong here");
    }
  };

  useEffect(() => {
    searchApi("Pasta");
  }, []);


  const filterResult = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} searchApi={searchApi} />
      <Text>{results.length}</Text>
      <Text>{error}</Text>
      <ResultsLists results ={filterResult("$")} title="Cost Effective"/>
      <ResultsLists results ={filterResult("$$")} title="Bit Pricier"/>
      <ResultsLists results ={filterResult("$$$")} title="Big Spender"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

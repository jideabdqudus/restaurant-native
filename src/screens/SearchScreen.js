import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsLists from "../components/ResultsLists";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
    console.log(results);
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
    <>
      <SearchBar term={term} onTermChange={setTerm} searchApi={searchApi} />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsLists results={filterResult("$")} title="Cost Effective" />
        <ResultsLists results={filterResult("$$")} title="Bit Pricier" />
        <ResultsLists results={filterResult("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

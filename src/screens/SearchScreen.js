import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  
  const onTermChange=(newTerm)=>{
    setTerm(newTerm)
  }
  return (
    <View>
      <SearchBar term={term} onTermChange={onTermChange} />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

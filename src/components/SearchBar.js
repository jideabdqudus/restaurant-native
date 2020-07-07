import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {

  return (
    <View style={styles.searchView}>
      <Feather name="search" size={30} style={styles.iconSize} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(e) => onTermChange(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconSize: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;

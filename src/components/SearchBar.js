import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, searchApi }) => {
  return (
    <View style={styles.searchView}>
      <Feather name="search" size={30} style={styles.iconSize} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={searchApi}
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

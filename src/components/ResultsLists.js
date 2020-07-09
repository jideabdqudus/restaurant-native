import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import ResultDetails from "./ResultDetails";


const ResultsLists = ({ title, results }) => {
  const variables = [
    {
      title: "Cost Effective",
      filter: "$",
    },
    {
      title: "Bit pricier",
      filter: "$$",
    },
    {
      title: "Big Spender",
      filter: "$$$",
    },
  ];

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <ResultDetails item ={item}/>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
});

export default ResultsLists;

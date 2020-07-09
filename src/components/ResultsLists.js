import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ResultsLists = ({title, results}) => {
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
      <Text>Results: {results.length}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsLists;

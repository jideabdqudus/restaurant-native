import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const ResultsLists = ({ title, results, navigation }) => {
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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Result", {id: item.id})}>
              <ResultDetails item={item} />
            </TouchableOpacity>
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
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsLists);

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShow = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    response.data;
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});

export default ResultsShow;

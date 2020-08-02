import React from "react";

import { View, Text, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.first}>Welcome to</Text>
      <Text style={styles.second}>Restour</Text>
      <Text style={styles.second}>Restour</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    letterSpacing: 2
  },
  second: {
    fontSize: 30,
    marginLeft: 20,
    letterSpacing: 2,
    fontWeight: "bold"
  },
});

export default LoginScreen;

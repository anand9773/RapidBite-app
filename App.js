import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";

function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
      {/* <Text> can you here me </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

// const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text> Meals</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});

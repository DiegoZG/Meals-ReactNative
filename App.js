import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

console.log(StatusBar.currentHeight)
// const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <> 
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text> Search</Text>
      </View>
      <View style={styles.meals}>
        <Text> Meals</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  search: {
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  meals: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: 20
    
  }
});

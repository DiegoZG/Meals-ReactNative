import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text> Search</Text>
      </View>
      <View style={styles.meals}>
        <Text> Meals</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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

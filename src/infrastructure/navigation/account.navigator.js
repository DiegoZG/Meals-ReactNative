import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Main"
      component={() => (
        <View>
          <Text>Login screen</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);

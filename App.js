import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import * as firebase from "firebase";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Foundation } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useSource,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
} from "@expo-google-fonts/source-sans-pro";

import {
  useFonts as useBalsamiq,
  BalsamiqSans_400Regular,
} from "@expo-google-fonts/balsamiq-sans";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

const firebaseConfig = {
  apiKey: "AIzaSyDDDm7eUQqENrqE7EXhN2pKCyeOcaRmIP8",
  authDomain: "meals-1d8e6.firebaseapp.com",
  projectId: "meals-1d8e6",
  storageBucket: "meals-1d8e6.appspot.com",
  messagingSenderId: "424534248196",
  appId: "1:424534248196:web:56bc21778b82f9ee839e51",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [sourceLoaded] = useSource({
    SourceSansPro_400Regular_Italic,
  });

  const [balsamiqLoaded] = useBalsamiq({
    BalsamiqSans_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !sourceLoaded || !balsamiqLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { List, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "../../../services/restaurants/restaurants.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        // contentContainerStyle={{ padding: 16 }}  padding 0 will put cards right next to the edges
      />
    </SafeArea>
  );
};

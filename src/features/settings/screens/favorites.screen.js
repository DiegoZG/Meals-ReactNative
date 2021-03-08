import React, { useContext } from "react";
import styled from "styled-components/native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { TouchableOpacity } from "react-native";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justifycontent: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        // contentContainerStyle={{ padding: 16 }}  padding 0 will put cards right next to the edges
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center> No favorites yet</Text>
    </NoFavoritesArea>
  );
};

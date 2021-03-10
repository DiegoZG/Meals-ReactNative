import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FadeInView } from "../../../animations/fade.animation";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantList } from "../components/restaurant-list.styles";

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.sizes[1]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!error || !!locationError;
  const { favorites } = useContext(FavoritesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={"large"} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          // contentContainerStyle={{ padding: 16 }}  padding 0 will put cards right next to the edges
        />
      )}
    </SafeArea>
  );
};

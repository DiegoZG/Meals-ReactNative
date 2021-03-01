import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="American Breakfast" />
          <List.Item title="Pancakes" />
          <List.Item title="French Toast" />
          <List.Item title="White eggs Fritatta" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Margharita Flatbread" />
          <List.Item title="King Burger" />
          <List.Item title="Sesame Chicken Chop Salad" />
          <List.Item title="Buffalo Wings" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Ribeye Steak w/rice and brocolini" />
          <List.Item title="Short Ribs" />
          <List.Item title="Salmon w/veggies" />
          <List.Item title="Chicken Riesling" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Pisco Sour" />
          <List.Item title="Machu Picchu" />
          <List.Item title="Margarita" />
          <List.Item title="Mojito" />
          <List.Item title="Coke" />
          <List.Item title="Iced Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

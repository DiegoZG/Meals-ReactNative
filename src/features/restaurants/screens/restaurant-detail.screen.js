import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);
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
          <Divider />
          <List.Item title="Pancakes" />
          <Divider />
          <List.Item title="French Toast" />
          <Divider />
          <List.Item title="White eggs Fritatta" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Margharita Flatbread" />
          <Divider />
          <List.Item title="King Burger" />
          <Divider />
          <List.Item title="Sesame Chicken Chop Salad" />
          <Divider />
          <List.Item title="Buffalo Wings" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Ribeye Steak w/rice and brocolini" />
          <Divider />
          <List.Item title="Short Ribs" />
          <Divider />
          <List.Item title="Salmon w/veggies" />
          <Divider />
          <List.Item title="Chicken Riesling" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Pisco Sour" />
          <Divider />
          <List.Item title="Machu Picchu" />
          <Divider />
          <List.Item title="Margarita" />
          <Divider />
          <List.Item title="Mojito" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Iced Tea" />
        </List.Accordion>
        <Divider />
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};

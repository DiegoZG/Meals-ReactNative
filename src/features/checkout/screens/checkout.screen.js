import React, { useContext, useEffect, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView } from "react-native";
import { CartContext } from "../../../services/cart/cart.context";
import { List } from "react-native-paper";
import { CreditCardInput } from "../components/credit-card.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState(null);
  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon bg="skyblue" icon="cart-off" />
          <Text> Your cart is empty :(</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant}> </RestaurantInfoCard>
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            if (t.length) {
              setName(t);
            } else {
              setName(null);
            }
          }}
        />
        {name && <CreditCardInput name={name} />}
      </ScrollView>
    </SafeArea>
  );
};

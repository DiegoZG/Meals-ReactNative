import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = () => {
  const { cart } = useContext(CartContext);
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};

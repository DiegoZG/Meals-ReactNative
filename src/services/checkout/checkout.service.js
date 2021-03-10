import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51He4O5K75x8ZXnEMvFIhJegsveeLVj7ranGkhkPTKGJ5AKLuY63rWgWpSvdePy9phluYtlkiZ6uVzv9ovPTXYQVr00GOkZ50O1"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

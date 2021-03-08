import React, { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from '../../../components/utility/safe-area.component'
import {Text } from '../../../components/typography/text.component'

export const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? 
  () : 
  ()
};

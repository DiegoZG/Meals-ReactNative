import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/meals3.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.7);
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
const Email = styled(Text)`
  background-color: rgba(255, 255, 255, 0.7);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePictre = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(() => {
    getProfilePictre(user);
  }, [user]);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Email>
              <Text variant="label"> {user.email}</Text>
            </Email>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
          <Spacer />
          <SettingsItem
            title="Payment Method"
            left={(props) => <List.Icon {...props} color="black" icon="card" />}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={(props) => (
              <List.Icon {...props} color="black" icon="history" />
            )}
            onPress={() => null}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};

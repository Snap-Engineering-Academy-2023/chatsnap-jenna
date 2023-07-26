import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

// Screens
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";

import { getAuth, signOut } from "firebase/auth";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function ChatStack({ route, navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;

  // useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   console.log(routeName);
  //   if (routeName == "Conversation") {
  //     console.log("routeName");
  //     navigation.setOptions({ tabBarStyle: { display: "none" } });
  //   } else {
  //     navigation.setOptions({ tabBarStyle: { display: "flex" } });
  //   }
  // }, [navigation, route]);

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              user = null;
            })
            .catch((error) => {
              // An error happened.
              // should we do something with that error??
            });
        }}
        title="Log Out"
      />
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  );
}

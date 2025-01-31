import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Text, View } from "react-native";
import BasicChatbot from "../chatbots/BasicChatbot";
import BakersChatbot from "../chatbots/BakersChatbot";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// prettier-ignore
export const CHATBOTS = {
  "BasicChatbot": {
    id: "BasicChatbot",
    name: "React Native Chatbot",
    imageUrl: "https://loremflickr.com/140/140",
    component: BasicChatbot,
  },
  "BakersChatbot": {
    id: "BakersChatbot",
    name: "Baker's Dog Trivia",
    imageUrl: "https://img.freepik.com/free-vector/cute-dog-robot-cartoon-character-animal-technology-isolated_138676-3143.jpg?w=150",
    component: BakersChatbot,
  }
};

export default function ConversationScreen({ route, navigation }) {
  // const { chatbotName } = route.params;
  const chatbotName = "BasicChatbot";
  const insets = useSafeAreaInsets();

  const makeChatbotComponent = (chatbotName) => {
    if (CHATBOTS[chatbotName]) {
      const Chatbot = CHATBOTS[chatbotName].component;
      return <Chatbot />;
    } else {
      return <Text>No Chatbot Found with name '{chatbotName}'</Text>;
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <BakersChatbot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

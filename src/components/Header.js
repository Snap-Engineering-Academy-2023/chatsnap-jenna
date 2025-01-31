import { Text, View, StyleSheet, Button } from "react-native";
import { colors } from "../../assets/themes/colors";
import { fontHeader } from "../../assets/themes/font";
import { Followers, More, Search } from "../../assets/snapchat/HeaderIcons";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <View style={[styles.profile, styles.buttons]}>
          {/* INSERT PROFILE AVATAR */}
        </View>
        <View style={[styles.search, styles.buttons]}>
          <Search />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.headerRight}>
        <View style={[styles.followers, styles.buttons]}>
          <Followers />
        </View>
        <View style={[styles.more, styles.buttons]}>
          <More />
        </View>
      </View>
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: colors.primary,
    fontSize: fontHeader.fontSize,
    fontFamily: fontHeader.fontFamily,
    fontWeight: fontHeader.fontWeight,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 8,
  },
  headerRight: {
    flexDirection: "row",
    gap: 8,
  },
  buttons: {
    borderRadius: 100,
    height: 44,
    width: 44,
    backgroundColor: colors.interactionGraySubtle,
    justifyContent: "center",
    alignItems: "center",
  },
});

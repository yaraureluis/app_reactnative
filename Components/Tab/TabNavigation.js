import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import AppNavigation from "../Navigation/AppNavigation";
import CompleteListNavigation from "../Navigation/CompleteListNavigation";

const BottomsTabs = createBottomTabNavigator();

function TabNavigation() {
  return (
    <BottomsTabs.Navigator
      initialRouteName="Wish List"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomsTabs.Screen
        name="Nueva Lista"
        component={AppNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-home" size={24} color="white" />
            </View>
          ),
        }}
      />
      <BottomsTabs.Screen
        name="Mis Listas"
        component={CompleteListNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <FontAwesome5 name="clipboard-list" size={24} color="white" />
            </View>
          ),
        }}
      />
    </BottomsTabs.Navigator>
  );
}

export default TabNavigation;
const styles = StyleSheet.create({
  tabBar: {
    height: 45,
    backgroundColor: "#F79D9D",
    borderTopColor: "white",
    borderTopWidth: 3,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
});

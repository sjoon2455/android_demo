import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CameraScreen from "../screens/CameraScreen";
import LoveScreen from "../screens/LoveScreen";
import MyPageScreen from "../screens/MyPageScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Hi",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tapBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const CameraStack = createStackNavigator({
  Camera: CameraScreen
});

CameraStack.navigationOptions = {
  showLabel: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add" : "md-add"}
    />
  )
};

const LoveStack = createStackNavigator({
  Love: LoveScreen
});

LoveStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-heart${focused ? "" : "-outline"}`
          : "md-heart"
      }
      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
    />
  )
};

const MyPageStack = createStackNavigator({
  MyPage: MyPageScreen
});

MyPageStack.navigationOptions = {
  tabBarLabel: "MyPage",
  tabBarIcon: focused => (
    <TabBarIcon
      focused={focused.focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    CameraStack,
    LoveStack,
    MyPageStack
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

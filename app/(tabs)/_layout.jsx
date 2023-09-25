import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import tw from "twrnc";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={tw`flex flex-col items-center mt-3`}>
              <TabBarIcon name="home" color={color} size={24} />
              <Text style={tw`mt-1 text-xs text-gray-500`}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={tw`flex flex-col items-center mt-3`}>
              <TabBarIcon name="gear" color={color} size={24} />
              <Text style={tw`mt-1 text-xs text-gray-500`}>Settings</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon({ ...props }) {
  return (
    <FontAwesome
      size={props.size || 26}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

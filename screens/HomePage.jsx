import React from "react";
import { Text, View, ScrollView } from "react-native";
import tw from "twrnc";

export default function HomePage({ items }) {
  return (
    <ScrollView style={tw`p-4`}>
      <Text style={tw`text-2xl font-bold`}>List of Items</Text>
      {items.map((item, index) => {
        return (
          <View key={index} style={tw`flex flex-row items-center py-1`}>
            <Text style={tw`font-semibold text-lg`}>{item.id}.</Text>
            <Text style={tw`text-gray-700`}> {item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

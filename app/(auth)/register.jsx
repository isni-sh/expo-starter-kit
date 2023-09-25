import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../../components/AppButton";
import tw from "twrnc";
import { AuthContext } from "../../context/AuthProvider";

export default function RegisterPage() {
  const { register } = useContext(AuthContext);

  return (
    <SafeAreaView style={tw`mx-5 flex-1 justify-center`}>
      <Text style={tw`text-2xl pb-10`}>Register Screen View</Text>
      <AppButton type="blue" onPress={() => register()}>
        Click me
      </AppButton>
    </SafeAreaView>
  );
}

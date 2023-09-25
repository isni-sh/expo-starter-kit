import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import AppButton from "../../components/AppButton";
import tw from "twrnc";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={tw`mx-5 flex-1 justify-center`}>
      <Text style={tw`text-2xl pb-10`}>Login Screen View</Text>
      <AppButton type="blue" onPress={() => login()}>
        Click me
      </AppButton>
    </SafeAreaView>
  );
};

export default Login;

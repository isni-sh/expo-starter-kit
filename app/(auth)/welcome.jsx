import { View, Text } from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexPage() {
  return (
    <SafeAreaView style={tw`mx-5 flex-1 justify-center`}>
      <View style={tw`mt-10`}>
        <Text style={tw`text-center text-4xl font-bold`}>Welcome Screen</Text>
      </View>

      <View style={tw`flex flex-row justify-center pt-10`}>
        <Link href="/login" style={tw`mr-10 text-lg`}>
          Login
        </Link>
        <Link href="/register" style={tw`text-lg`}>
          Register
        </Link>
      </View>

      <Link href="/home" style={tw`text-center text-gray-500 mt-16`}>
        Continue without logging in
      </Link>
    </SafeAreaView>
  );
}

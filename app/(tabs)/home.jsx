import HomePage from "../../screens/HomePage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, ActivityIndicator } from "react-native";
import useSWR from "swr";
import { fetcher } from "../../utils/client";

export default function Home() {
  const { data, error, isLoading } = useSWR("/", fetcher);
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView>
      {isLoading ? <ActivityIndicator /> : <HomePage items={data} />}
    </SafeAreaView>
  );
}

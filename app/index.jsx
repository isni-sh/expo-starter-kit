import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../utils/client";
import { AuthContext } from "../context/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { View, ActivityIndicator } from "react-native";

const Index = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      SecureStore.getItemAsync("user")
        .then((response) => {
          setUser(response);
          if (response === null) {
            router.replace("/welcome");
          } else if (user && inAuthGroup) {
            router.replace("/home");
          }
        })
        .catch(() => {
          setLoading(false);
        })
        .finally(() => setLoading(false));
    }
    getUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Index;

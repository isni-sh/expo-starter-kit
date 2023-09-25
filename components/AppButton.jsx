import React from "react";
import { Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";

const AppButton = ({
  onPress,
  children,
  iconLeft,
  disabled,
  activeOpacity,
  loading,
  type = "grayOutline",
}) => {
  const btnStyle = {
    blue: {
      backgroundColor: Colors.BLUE_500,
      color: "white",
    },
    green: {
      backgroundColor: Colors.GREEN_900,
      color: "white",
    },
  };

  const txtStyle = {
    blue: {
      color: "white",
    },
    green: {
      color: "white",
    },
    grayOutline: {
      color: Colors.GRAY_900,
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={{
        borderRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 12,
        textAlign: "center",
        fontWeight: 500,
        width: "100%",
        ...btnStyle[type],
      }}
    >
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={{ textAlign: "center", ...txtStyle[type] }}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

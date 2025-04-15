import { TouchableOpacity } from "react-native";
import React from "react";
import * as VectorIcon from "@expo/vector-icons";
import { IIconFamily, IIconProps } from "./types";

export default function Icon<T extends IIconFamily>({
  name,
  size = 24,
  color = "#000",
  family,
  style,
  onPress,
  children,
  ...props
}: IIconProps<T>) {
  const Icon = VectorIcon[family];
  return (
    <TouchableOpacity
      style={style}
      disabled={!onPress}
      onPress={onPress}
      {...props}
    >
      <Icon name={name} size={size} color={color} onPress={onPress} />
    </TouchableOpacity>
  );
}

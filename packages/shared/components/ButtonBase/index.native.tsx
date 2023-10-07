import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { ButtonBaseProps } from "./props";

const Button = styled(TouchableOpacity)``;

export const ButtonBase = ({
  onPress,
  className,
  children,
  disabled,
  style,
}: ButtonBaseProps) => {
  return (
    <Button {...{ onPress, className, style, disabled }}>{children}</Button>
  );
};

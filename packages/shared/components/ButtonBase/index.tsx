import styled from "styled-components";
import { ButtonBaseProps } from "./props";
import React from "react";

const Button = styled.div`
  cursor: pointer;
`;

export const ButtonBase = ({
  onPress,
  className,
  children,
  disabled,
  style,
}: ButtonBaseProps) => {
  return (
    <Button {...{ onClick: onPress, className, style, disabled }}>
      {children}
    </Button>
  );
};

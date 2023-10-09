import React from "react";
import { ButtonBase } from "../ButtonBase";
import { ButtonBaseProps } from "../ButtonBase/props";
import { IconProps, Icon } from "../Icon";

type IconButtonProps = ButtonBaseProps & IconProps;

export const IconButton = ({
  onPress,
  style,
  className,
  icon,
  size,
  color,
}: IconButtonProps) => {
  return (
    <ButtonBase {...{ onPress, style, className }}>
      <Icon {...{ icon, size, color }} />
    </ButtonBase>
  );
};

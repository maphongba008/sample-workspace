import React from "react";
import IcoMoon, { iconList } from "react-icomoon";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "./props";
import iconSet from "./selection.json";

console.log("list", iconList(iconSet));

export const Icon = ({ icon, color, ...props }: IconProps) => {
  return (
    <IcoMoon
      native
      SvgComponent={Svg}
      PathComponent={Path}
      size={20}
      color={color || "blue"}
      icon={icon}
      iconSet={iconSet}
      {...props}
    />
  );
};

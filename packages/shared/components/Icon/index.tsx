import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";
import { IconProps } from "./props";

export type { IconProps };

export const Icon = ({ icon, color, size, ...props }: IconProps) => {
  return (
    <IcoMoon
      size={size}
      color={color || "blue"}
      icon={icon}
      iconSet={iconSet}
      {...props}
    />
  );
};

import { StyleProp, ImageStyle } from "react-native";
export type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
  style?: StyleProp<ImageStyle>;
};

import React from "react";
import styled from "styled-components";
import { Image as Img } from "react-native";
import { ImageProps } from "./props";

const RNImage = styled(Img)``;

export const Image = (props: ImageProps) => {
  return (
    <RNImage
      style={props.style}
      source={{
        uri: props.src,
      }}
    />
  );
};

import React from "react";
import styled from "styled-components";
import { Image as Img } from "react-native";
import { ImageProps } from "./props";

const Image = styled(Img)``;

export default (props: ImageProps) => {
  return (
    <Image
      style={props.style}
      source={{
        uri: props.src,
      }}
    />
  );
};

import React from "react";
import styled from "styled-components";
import { ImageProps } from "./props";

const Img = styled.img``;

export const Image = (props: ImageProps) => {
  return <Img className={props.className} alt={props.alt} src={props.src} />;
};

import React from "react";
import styled from "styled-components";
import { ImageProps } from "./props";

const Image = styled.img``;

export default (props: ImageProps) => {
  return <Image className={props.className} alt={props.alt} src={props.src} />;
};

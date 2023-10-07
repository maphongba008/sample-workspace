import { Box } from "../Box";
import styled from "styled-components";
import { Text } from "../Text";
import { Image } from "../Image";

type AvatarProps = {
  src: string;
  name: string;
  style?: any;
  className?: string;
  type?: "circle" | "square";
};

// border-radius: ${(props: any) => (props.type === "circle" ? "24px" : "8px")};
const AvatarWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled(Image)`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  left: 0;
`;

const AvatarName = styled(Text)`
  font-size: 40px;
  z-index: 1;
`;

export const Avatar = ({ src, name, type, className, style }: AvatarProps) => {
  return (
    <AvatarWrapper {...{ className, style, type }}>
      <AvatarImage src={src} />
      <AvatarName>{name.slice(0, 1)}</AvatarName>
    </AvatarWrapper>
  );
};

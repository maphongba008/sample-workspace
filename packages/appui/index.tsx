import React from "react";

import Text from "shared/components/Text";
import Box from "shared/components/Box";
import Image from "shared/components/Image";

import styled from "styled-components";

const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
`;

export default () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Avatar src="https://file-examples.com/storage/feaade38c1651bd01984236/2017/10/file_example_PNG_500kB.png" />
    </Box>
  );
};

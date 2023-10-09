import React from "react";

import {
  Box,
  Text,
  Icon,
  Avatar,
  ButtonBase,
  IconButton,
} from "shared/components";

import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  margin-top: 20px;
`;

export default () => {
  return (
    <Box
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <StyledAvatar
        type="square"
        name="Joh"
        src="https://file-examples.com/storage/feaade38c1651bd01984236/2017/10/file_example_PNG_500kB.png"
      />
      <ButtonBase onPress={() => alert("something")}>
        <Text>Click me please</Text>
      </ButtonBase>
      {[
        "camera",
        "contact",
        "haivmind",
        "home",
        "imessage",
        "notification",
        "play",
        "record",
        "setting",
        "whatsapp",
      ].map((icon) => (
        <IconButton
          size={40}
          color="yellow"
          icon={icon}
          key={icon}
          onPress={() => alert(icon)}
        />
      ))}
    </Box>
  );
};

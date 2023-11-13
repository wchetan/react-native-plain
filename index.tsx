import { Text, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";

type ModeType = "text" | "outlined" | "contained" | "elevated";

type props = {
  /*
    text -  button with text & without background or outline
    outlined - button with outline & text, with or without background
  */
  mode?: ModeType;
  children: React.ReactNode;
};

const getTypeStyle = (type: ModeType) => {
  switch (type) {
    case "text":
      return {};
    case "outlined":
      return { borderWidth: 1 };
    default: {
    }
  }
};

const Button = ({ mode = "text", children }: props) => {
  const typeStyle = useMemo(() => {
    return getTypeStyle(mode);
  }, [mode]);
  return (
    <TouchableOpacity style={typeStyle}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

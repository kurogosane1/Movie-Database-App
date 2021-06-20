import React from "react";
import { InputLayer } from "../types";
import {
  InputContainer,
  InputLabel,
  InputTextContainer,
  InputPasswordContainer,
} from "../styles";

function Input({ types, Label }: InputLayer) {
  return (
    <InputContainer>
      <InputLabel labelled={Label} />
      <InputTextContainer type={types} />
    </InputContainer>
  );
}

export default Input;

import React from "react";
import styled from "styled-components";

const LabelColor = styled.label`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-top: 1rem;
  background-color: ${({ color }) => color};
  border-radius: 5px;
`;
const InputRadio = styled.input`
  display: none; // lo oculto porque se ve feo, pero
  &:checked + label {
    //cuando el imput esté marcado, se le hace un borde
    border: 1px solid white;
  }
`;

const ColorBox = ({ color, handleChangeColor, isChecked }) => (
  <>
    <InputRadio
      defaultChecked={isChecked}
      id={color}
      type="radio"
      name="color"
      onChange={() => handleChangeColor(color)}
    />
    <LabelColor htmlFor={color} color={color}></LabelColor>
  </>
);

export default ColorBox;

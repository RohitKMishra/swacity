import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1.8rem;
  color: #333;
  border: 2px solid #8a2be2;
  background-color: #fff;
  border-radius: 10px;
  width: 160px;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

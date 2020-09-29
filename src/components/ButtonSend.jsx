import React from "react";
import styled from "styled-components";

export default function ButtonSend(props) {
  const { label, handleOnClick } = props;
  return <Button onClick={handleOnClick}>{label}</Button>;
}

const Button = styled.button`
  display: block;
  width: 50%;
  padding: 12px;
  border-radius: 6px;
  margin: 5px 0;
  background-color: #1e90ff;
  border: 2px solid #1e90ff;
  font-size: 16px;

  color: white;
`;

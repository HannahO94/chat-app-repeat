import React from "react";
import { useRef } from "react";
import ButtonSend from "./ButtonSend";
import styled from "styled-components";

export default function MessageForm({ label, placeholder, handleOnSuccess }) {
  const messageInputField = useRef();
  const userInputField = useRef();

  function handleOnClick() {
    // console.log(messageInputField.current.value);
    const message = messageInputField.current.value;
    const user = userInputField.current.value;
    const url =
      "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";
    const data = {
      message: message,
      user: user,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Data har skickats");
      handleOnSuccess();
      messageInputField.current.value = null;
      userInputField.current.value = null;
    });
  }

  return (
    <div>
      <label>{label}:</label>
      <br />
      <Input ref={messageInputField} type="text" placeholder={placeholder} />
      <br />
      <label>User:</label>
      <br />
      <Input ref={userInputField} type="text" placeholder="User" />
      <ButtonSend handleOnClick={handleOnClick} label="Send" />
    </div>
  );
}

const Input = styled.input`
  width: 50%;
  padding: 12px;
  border: 1px solid #a0a0a0;
  border-radius: 6px;
`;

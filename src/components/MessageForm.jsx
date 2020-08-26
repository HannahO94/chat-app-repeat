import React from "react";
import { useRef } from "react";
import ButtonSend from "./ButtonSend";

export default function MessageForm({ label, placeholder, handleOnSuccess }) {
  const messageInputField = useRef();

  function handleOnClick() {
    // console.log(messageInputField.current.value);
    const message = messageInputField.current.value;
    const url =
      "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";
    const data = {
      message: message,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Data har skickats");
      handleOnSuccess();
      messageInputField.current.value = null;
    });
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <br />
      <input
        ref={messageInputField}
        type="text"
        className="form-control"
        placeholder={placeholder}
      />
      <ButtonSend handleOnClick={handleOnClick} label="Send" />
    </div>
  );
}

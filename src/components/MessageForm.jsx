import React from "react";
import ButtonSend from "./ButtonSend";

export default function MessageForm({ label, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type="text" placeholder={placeholder} />
      <ButtonSend label="Send" />
    </div>
  );
}

import React from "react";
import MessageItem from "./MessageItem";

export default function MessageList() {
  return (
    <div>
      <MessageItem message="hej" />
      <MessageItem message="Hallå" />
      <MessageItem message="Hejsan" />
      <MessageItem message="Hej på dig" />
    </div>
  );
}

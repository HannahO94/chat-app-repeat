import React from "react";
import MessageItem from "./MessageItem";
import styled from "styled-components";

export default function MessageList({ messages }) {
  const messageArray = Object.entries(messages);
  return (
    <Ul>
      {messageArray.reverse().map((item) => {
        const key = item[0];
        const messageData = item[1];
        // const message = messageData.message;

        return <MessageItem key={key} message={messageData} />;
      })}
    </Ul>
  );
}

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

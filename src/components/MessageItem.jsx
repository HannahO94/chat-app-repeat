import React from "react";
import styled from "styled-components";

export default function MessageItem({ message }) {
  function getMessageUser() {
    if (message.user) {
      return message.user;
    } else if (message.username) {
      return message.username;
    } else if (message.name) {
      return message.name;
    } else {
      return "Nameless user";
    }
  }

  return (
    <Li>
      {typeof message.message === "string" ? (
        message.message
      ) : (
        <span>Something went wrong</span>
      )}
      <p>-{getMessageUser()}</p>
    </Li>
  );
}

const Li = styled.li`
  width: 50%;
  border: 1px solid #C9C7C7;
  padding 12px;
  margin: 1px;
  border-radius: 6px;
  p{
    margin: 0;
    color: #9B9B9B;
  }
`;

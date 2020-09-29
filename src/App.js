import React from "react";
import { useState, useEffect } from "react";

import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import styled from "styled-components";

function App() {
  const [chatRoomData, setChatRoomData] = useState({});
  const [isHidden, setIsHidden] = useState(true);

  function handleGetChatRoom() {
    const url =
      "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChatRoomData(data);
      });
  }
  // function animateOnClick() {
  //   return setIsHidden(false);
  // }
  console.log(isHidden);

  useEffect(() => {
    handleGetChatRoom();
  }, []);

  return (
    <Div>
      <HeadingWrapper>
        <Heading
          animate={{ x: 100, opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {chatRoomData.name}
        </Heading>
      </HeadingWrapper>

      <div>
        <MessageForm
          handleOnSuccess={handleGetChatRoom}
          label="Enter you message"
          placeholder="Ditt meddelande"
        />
      </div>

      <div>
        <div className="col-md-12">
          {/* Kollar så vi har chatroomdata innan vi renderar messagelist, om vi inte har data renderas en tom sträng */}
          {chatRoomData.messages ? (
            <MessageList messages={chatRoomData.messages} />
          ) : (
            ""
          )}
        </div>
      </div>
    </Div>
  );
}

export default App;

const Div = styled.div`
  margin: 1rem;
`;
const Heading = styled.h1`
  cursor: pointer;
`;
const HeadingWrapper = styled.div`
  width: 100%;
  height: ${(isHidden) => (isHidden ? "100vh" : "20vh")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

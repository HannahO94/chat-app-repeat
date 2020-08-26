import React from "react";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div>
      <h1>ChatRoom</h1>
      <MessageForm label="Enter you message" placeholder="Ditt meddelande" />
      <MessageList />
    </div>
  );
}

export default App;

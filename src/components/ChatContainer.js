import React from "react";
import styled from "styled-components";
import Message from "./Message";

const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 36px 32px 24px 32px;
  height: 500px;
  overflow-y: auto;
  background: linear-gradient(120deg, #f0f6ff 0%, #e3f0ff 100%);
  border-radius: 24px;
  box-shadow: none;
  border: 2px solid #b6d0f7;
  position: relative;
`;

const Watermark = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.95rem;
  color: #b6d0f7;
  opacity: 0.7;
  pointer-events: none;
`;

const ChatContainer = ({ messages }) => {
  return (
    <ChatWindow>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text } isUser={msg.isUser} isBot={!msg.isUser} />
      ))}
      <Watermark>FakeBank Secure Chat</Watermark>
    </ChatWindow>
  );
};

export default ChatContainer;

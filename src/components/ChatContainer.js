import React from "react";
import styled from "styled-components";
import Message from "./Message";

const ChatWindow = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding: 36px 32px 24px 32px;
  flex: 1 1 0%;
  min-height: 0;
  max-height: 100%;
  overflow-y: auto;
  background: linear-gradient(120deg, #f0f6ff 0%, #e3f0ff 100%);
  border-radius: 24px;
  box-shadow: none;
  border: 2px solid #b6d0f7;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #b6d0f7 #f0f6ff;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
    background: #f0f6ff;
  }
  &::-webkit-scrollbar-thumb {
    background: #b6d0f7;
    border-radius: 8px;
  }
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
  // Show messages in descending order (latest at bottom)
  const descendingMessages = [...messages].reverse();
  return (
    <ChatWindow>
      {descendingMessages.map((msg, index) => (
        <Message key={index} text={msg.text} isUser={msg.isUser} isBot={!msg.isUser} />
      ))}
      <Watermark>FakeBank Secure Chat</Watermark>
    </ChatWindow>
  );
};

export default ChatContainer;

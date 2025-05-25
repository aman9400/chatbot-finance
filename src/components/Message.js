import React from "react";
import styled from "styled-components";

const MessageBubble = styled.div`
  background: ${(props) =>
    props.isUser
      ? "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)"
      : "linear-gradient(90deg, #fff 0%, #e3f0ff 100%)"};
  color: ${(props) => (props.isUser ? "#fff" : "#1e293b")};
  padding: 18px 26px;
  margin: 12px 0;
  border-radius: 28px;
  max-width: 75%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  font-size: 1.12rem;
  box-shadow: none; /* Removed shadow */
  word-break: break-word;
  border: ${(props) =>
    props.isUser ? "2px solid #2563eb" : "2px solid #b6d0f7"};
  position: relative;

  &::after {
    content: ${(props) => (props.isUser ? "'You'" : "'FinBank'")};
    display: block;
    font-size: 0.8rem;
    color: #b6d0f7;
    margin-top: 4px;
    text-align: ${(props) => (props.isUser ? "right" : "left")};
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const Message = ({ text, isUser }) => {
  return <MessageBubble isUser={isUser}>{text}</MessageBubble>;
};

export default Message;

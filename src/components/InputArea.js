import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 28px;
  background: #e3f0ff;
`;

const TextInput = styled.input`
  width: 80%;
  padding: 16px 22px;
  border-radius: 28px;
  border: 2px solid #b6d0f7;
  font-size: 1.05rem;
  outline: none;
  background: #fff;
  margin-right: 14px;
  transition: border 0.2s;
  &:focus {
    border: 2.5px solid #2563eb;
  }
`;

const SendButton = styled.button`
  padding: 16px 36px;
  border-radius: 28px;
  border: none;
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  color: white;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #60a5fa 0%, #2563eb 100%);
  }
`;

const InputArea = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <InputContainer>
      <TextInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <SendButton onClick={handleSend}>Send</SendButton>
    </InputContainer>
  );
};

export default InputArea;

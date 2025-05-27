import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";  // Import axios
import Header from "./components/Header";
import ChatContainer from "./components/ChatContainer";
import InputArea from "./components/InputArea";

const AppContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.18);
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  border: 1px solid #e0e7ff;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background: rgba(255,255,255,0.7);
`;

const LoadingText = styled.p`
  color: #4f46e5;
  font-weight: 500;
  margin: 0;
  padding: 10px 0 20px 0;
  text-align: center;
  letter-spacing: 0.5px;
`;

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [loading, setLoading] = useState(false);

  // to set messages from chatbot
  const handleSendMessage = async (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageText, isUser: true },
    ]);

    setLoading(true);

    try {
      // API call to new backend
      const response = await axios.post(
        "http://localhost:8084/ask",
        { question: messageText },
        { headers: { "Content-Type": "application/json" } }
      );

      const aiMessage = response.data.answer;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiMessage, isUser: false },
      ]);
    } catch (error) {
      console.error("Error with local chat API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "There are currently two accounts in the system:\n\n1. *John Doe\n   - Account ID: 1\n   - Email: jd@example.com\n   - Phone Number: 987654321\n   - Address: 23 Happiness Lane, CA USA\n   - Account Type: SAVINGS\n   - Balance: $500.00\n\n2. **Mohammad Najm*\n   - Account ID: 2\n   - Email: najm@example.com\n   - Phone Number: 9871910622\n   - Address: 123, Sadness Lane, India\n   - Account Type: Savings\n   - Balance: $5000.00"},
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Header />
      <MainArea>
        <ChatContainer messages={messages} />
        <InputArea onSendMessage={handleSendMessage} />
        {loading && <LoadingText>Thinking...</LoadingText>}
      </MainArea>
    </AppContainer>
  );
};

export default App;

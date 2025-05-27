import React from "react";
import styled from "styled-components";

const MessageBubble = styled.div`
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background: ${(props) => (props.isUser ? "#d0eaff" : "#ffffff")};
  color: #333;
  padding: 12px 16px;
  border-radius: 16px;
  max-width: 80%;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const AccountCard = styled.div`
  background: #fff;
  border: 1px solid #b6d0f7;
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 12px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const parseAccountData = (text) => {
  if (typeof text !== "string") return null;
  if (!text.includes("There are currently") || !text.includes("Account ID")) return null;

  const parts = text.split("\n\n").slice(1);
  return parts.map((part) => {
    const lines = part.split("\n").map((line) => line.trim().replace(/^\- /, ""));
    const name = lines[0].replace(/\*/g, "").trim();
    const details = {};

    lines.slice(1).forEach((line) => {
      const [key, ...rest] = line.split(":");
      details[key.trim()] = rest.join(":").trim();
    });

    return {
      name,
      ...details,
    };
  });
};


const Message = ({ text, isUser, isBot }) => {
  const accounts = parseAccountData(text);

  if(text.includes("There are currently")) {
    if (accounts) {
        return (
          <MessageBubble isUser={isUser}>
            {accounts.map((acc, index) => (
              <AccountCard key={index}>
                <div><Bold>{acc.name}</Bold></div>
                <div><Bold>Account ID:</Bold> {acc["Account ID"]}</div>
                <div><Bold>Email:</Bold> {acc["Email"]}</div>
                <div><Bold>Phone Number:</Bold> {acc["Phone Number"]}</div>
                <div><Bold>Address:</Bold> {acc["Address"]}</div>
                <div><Bold>Account Type:</Bold> {acc["Account Type"]}</div>
                <div><Bold>Balance:</Bold> {acc["Balance"]}</div>
              </AccountCard>
            ))}
          </MessageBubble>
        );
   }
  }
 

  return <MessageBubble isUser={isUser}>{text}</MessageBubble>;
};

export default Message;

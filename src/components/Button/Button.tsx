import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalObservable, LIBRARARY_NAME, Message } from "../..";

import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.primary ? "#1b116e" : "#ffffff")};
  background-color: ${(props) => (props.primary ? "#6bedb5" : "#1b116e")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#55bd90" : "#6bedb5")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  const [buttonText, setButtonText] = useState("");
  
  const handleNewMessage = useCallback((newMessage: Message | undefined) => {
    if (!newMessage) return;
    const { target, payload } = newMessage;
    if (target === LIBRARARY_NAME) {
      setButtonText(
        (currenButtonText) => (currenButtonText = payload.data as string)
      );
    }
  }, []);

  useEffect(() => {
    GlobalObservable.subscribe((data) => handleNewMessage(data));

    return () => {
      GlobalObservable.unsubscribe(handleNewMessage);
    };
  }, [handleNewMessage]);

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {buttonText}
    </StyledButton>
  );
};

export default Button;

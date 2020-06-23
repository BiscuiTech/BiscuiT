import React from "react";
import styled from "styled-components";

const BaseStyles = styled.div`
  display: block;
  background: black;
  width: 100%;
  min-height: 4em;
`;

const QuestionMarkBubble = () => {
  return <BaseStyles></BaseStyles>;
};

const ExclamationMarkBubble = () => {
  return <BaseStyles></BaseStyles>;
};

const DoubleExclamationMarkBubble = () => {
  return <BaseStyles></BaseStyles>;
};

export default {
  QuestionMarkBubble,
  ExclamationMarkBubble,
  DoubleExclamationMarkBubble,
};

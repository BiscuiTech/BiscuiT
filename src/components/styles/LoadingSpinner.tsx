import React from "react";
import styled from "styled-components";

const LoadingSpinnerStyles = styled.div`
  width: 26px;
  height: 26px;
  clear: both;
  margin: 0 auto;
  position: relative;
  border: 1px #000 solid;
  border-radius: 50%;
  -webkit-animation: spHydro 0.6s infinite linear;
  animation: spHydro 0.6s infinite linear;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
  }
  &:before {
    top: calc(50% - 5px);
    left: calc(50% - 5px);
  }
  &:after {
    top: -1px;
    left: -1px;
  }
  @-webkit-keyframes spHydro {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
  @keyframes spHydro {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const LoadingSpinner = () => {
  return <LoadingSpinnerStyles />;
};

import React from "react";
import styled from "styled-components";
import useTranslation from "../hooks/useTranslation";

const ErrorStyles = styled.div`
  color: black;
  padding: 2em;
  background: white;
  margin: 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
  }
  strong {
    margin-right: 1em;
  }
  .error-message--code {
    font-size: 14px;
    font-family: "Consolas", "monospace";
    line-height: 1;
    margin: 0;
    padding: 24px;
    background: #eee;
    border-radius: 5px;
    text-align: left;
  }
  .error-message--code::before {
    content: ">";
  }
  .error-message--sorry {
    font-size: 18px;
  }
`;

export const DisplayError = ({ error }) => {
  const { t } = useTranslation();
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Error!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  /* const arr = Array.from(error.message).map(str => [str, str.charCodeAt()]); */
  return (
    <ErrorStyles>
      <div data-test="graphql-error">
        {console.log(
          error.message.replace(
            /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
            ""
          )
        )}
        <strong>{t("common")["userMsg_Error"]}</strong>
        Une erreur s'est produite.
        <br />
        <div className="error-message--code">
          {error.message
            .replace(
              /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
              ""
            )
            .replace(/\n\s*\n/g, "\n")
            .replace("GraphQL error: ", "")}
        </div>
      </div>
    </ErrorStyles>
  );
};

const SuccessStyles = styled.div`
  color: black;
  padding: 2em;
  background: white;
  margin: 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid green;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
  }
  strong {
    margin-right: 1em;
  }
`;

export const DisplaySuccess = ({ message }) => {
  const { t } = useTranslation();
  return (
    <SuccessStyles>
      <p>
        <strong>{t("common")["userMsg_Success"]}</strong>
        {message}
      </p>
    </SuccessStyles>
  );
};

const WarnStyles = styled.div`
  color: black;
  padding: 2em;
  background: white;
  margin: 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid orange;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
  }
  strong {
    margin-right: 1em;
  }
`;

export const DisplayWarn = ({ message }) => (
  <WarnStyles>
    <p>
      <strong>Important,</strong>
      {message}
    </p>
  </WarnStyles>
);

import React from "react";
import PageHeader, { SubHeader } from "./styles/PageHeader";
import useTranslation from "../hooks/useTranslation";
import { ConfiguredTech, TechPill, getTechStyles } from "./TechStack";
import styled from "styled-components";

const TechPillWrapper = styled.li`
  background-color: hsl(200, 100%, 4%);
  margin: 6px 12px;
  padding: 0.6em 0;
  padding-right: 1em;
  display: flex;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  @media (min-width: 880px) {
    max-width: calc(50% - 24px);
  }
  &:hover {
    box-shadow: 4px 4px 1px #fbb03b;
    transform: translate3d(-4px, -4px, 0px);
  }
`;

const Uses = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader>{t("pageHeader")}</PageHeader>
      <SubHeader>{t("subHeader")}</SubHeader>
      <div className="container">
        <p>{t("forCoding")}</p>
        <ul className="list-inside mx-4 flex flex-row flex-wrap items-start justify-start">
          {ConfiguredTech.map((el, i) => {
            const styles = getTechStyles(el.id);
            return (
              <TechPillWrapper>
                <TechPill
                  key={i}
                  styles={styles}
                  className="text-lg self-start p-2 my-2 mx-4"
                >
                  {styles.name}
                </TechPill>
                <p className="text-lg">{t(`techDescription_${el.id}`)}</p>
              </TechPillWrapper>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Uses;

import React from "react";
import PageHeader, { SubHeader } from "./styles/PageHeader";
import useTranslation from "../hooks/useTranslation";
import { ConfiguredTech, TechPill, getTechStyles } from "./TechStack";

const Uses = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader>{t("pageHeader")}</PageHeader>
      <SubHeader>{t("subHeader")}</SubHeader>
      <div className="container">
        <p>{t("forCoding")}</p>
        <ul className="list-inside mx-4 max-w-sm flex flex-row items-start justify-start">
          {ConfiguredTech.map((el, i) => {
            const styles = getTechStyles(el.id);
            return (
              <TechPill
                key={i}
                styles={styles}
                className="text-lg self-start p-2 my-2 mx-4"
              >
                {styles.name}
              </TechPill>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Uses;

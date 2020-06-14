import React from "react";
import styled from "styled-components";
import useTranslation from "../hooks/useTranslation";
import { ListItem } from "./BlogList";
import { locales } from "../translations/config";
import { Locale } from "../translations/types";
import { cl } from "../../utils";

const LatestBlogStyles = styled.div`
  margin-top: 60px;
  overflow: auto;
  background: hsl(200, 100%, 4.5%);
  padding: 0.6em 1em;
`;

export const LatestBlog = ({ post }) => {
  const { locale, t } = useTranslation();
  const otherLocales = locales.filter((lang) => lang != locale)
  const filteredKeys = Object.keys(post)
  const filteredPost = filteredKeys
    .filter((el: Locale) => otherLocales.includes(el))
    .filter((el) => el !== null)
  const currentPost = post[locale]
  console.log('post: ', post)
  console.log(filteredPost)
  console.log(currentPost)
  return (
    <LatestBlogStyles>
      <h2>{t("latestBlog")}</h2>
      {currentPost?.slug ? (
        <ListItem
          date={currentPost.publishedOn}
          excerpt={currentPost.excerpt[locale]}
          locale={locale}
          path={currentPost.slug}
          t={t}
          title={currentPost.title}
          otherLocales={filteredPost}
        />
      ) : (
          <em>{t("common")["error_noBlogs"]}</em>
        )}
    </LatestBlogStyles>
  );
};

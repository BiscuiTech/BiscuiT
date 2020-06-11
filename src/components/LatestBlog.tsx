import React from "react";
import styled from "styled-components";
import useTranslation from "../hooks/useTranslation";
import { ListItem } from "./BlogList";

const LatestBlogStyles = styled.div`
  margin-top: 60px;
  overflow: auto;
  background: hsl(200, 100%, 4.5%);
  padding: 0.6em 1em;
`;

export const LatestBlog = ({ post }) => {
  const { locale, t } = useTranslation();
  return (
    <LatestBlogStyles>
      <h2>{t("latestBlog")}</h2>
      {post?.slug ? (
        <ListItem
          date={post.date}
          excerpt={post.excerpt[locale]}
          locale={locale}
          path={post.slug}
          t={t}
          title={post.title}
        />
      ) : (
        <em>{t("common")["error_noBlogs"]}</em>
      )}
    </LatestBlogStyles>
  );
};

import React from 'react'
import PageHeader, { SubHeader } from './styles/PageHeader'
import useTranslation from '../hooks/useTranslation'

const noBlogs = {
  fr: "Aucun blogue pour l'instant. Revenez plus tard!",
  en: "No blogs for now. Come back later!",
}

const Blog = () => {
  const { t, locale } = useTranslation()

  return (
    <>
      <PageHeader>Articles</PageHeader>
      <SubHeader>{t('subHeader')}</SubHeader>
      <div className="my-12 text-center">
        <p>
          <i>{noBlogs[locale] || noBlogs.en}</i>
        </p>
      </div>
    </>
  )
}
export default Blog
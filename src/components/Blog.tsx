import React from 'react'
import PageHeader, { SubHeader } from './styles/PageHeader'
import useTranslation from '../hooks/useTranslation'

const Blog = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>Articles</PageHeader>
      <SubHeader>{t('subHeader')}</SubHeader>
      <div className="my-12">
        Content
      </div>
    </>
  )
}
export default Blog
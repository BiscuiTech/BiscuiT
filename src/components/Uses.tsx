import React from 'react'
import PageHeader, { SubHeader } from './styles/PageHeader'
import useTranslation from '../hooks/useTranslation'

const Uses = () => {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader>
        {t('pageHeader')}
      </PageHeader>
      <SubHeader>{t('subHeader')}</SubHeader>
      <div className="container">
        <p>{t('forCoding')}</p>
        <ol className="list-inside colored-list mx-4 max-w-sm">
          <li>React</li>
          <li>Next.js</li>
          <li>Apollo</li>
          <li>Prisma</li>
          <li>GraphQL</li>
        </ol>
      </div>
    </>
  )
}
export default Uses

import React from 'react'
import Layout from '../../components/Layout';
import withAPILocale from '../../hocs/withAPILocale'
import PageHeader, { SubHeader } from '../../components/styles/PageHeader'

const ArchivesPage = () => {
  return (
    <Layout

      title="Biscui.Tech || Archives"
      description="Biscui.Tech Archives page"
    >
      <PageHeader>
        Archives
      </PageHeader>
      <SubHeader>
        Page currently in development. Access past version from the repo.
      </SubHeader>
    </Layout>
  )
}

export default withAPILocale('archives')(ArchivesPage)
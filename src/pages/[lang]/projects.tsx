import React from 'react';
import Layout from '../../components/Layout';
import withAPILocale from '../../hocs/withAPILocale'

const ProjectsPage = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    how!
  </Layout>
);

export default withAPILocale('projects')(ProjectsPage);

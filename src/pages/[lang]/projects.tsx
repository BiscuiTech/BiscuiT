import React from 'react';
import Layout from '../../components/Layout';
import withAPILocale from '../../hocs/withAPILocale'
import Projects from '../../components/Projects'
const ProjectsPage = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    <Projects />
  </Layout>
);

export default withAPILocale('projects')(ProjectsPage);

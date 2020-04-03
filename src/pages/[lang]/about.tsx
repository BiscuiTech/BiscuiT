import React from 'react';
import Layout from '../../components/Layout';
import About from '../../components/About';
import withAPILocale from '../../hocs/withAPILocale'

const AboutPage: React.FC = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    <About />
  </Layout>
);

export default withAPILocale('about')(AboutPage);

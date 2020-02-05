import React from 'react';
import Layout from '../../components/Layout';
// import Who from '../../components/Who';
import withAPILocale from '../../hocs/withAPILocale'

const AboutPage: React.FC = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    About me
  </Layout>
);

export default withAPILocale('about')(AboutPage);

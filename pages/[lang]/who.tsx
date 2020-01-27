import React from 'react';
import Layout from '../../components/Layout';
import Who from '../../components/Who';
import withAPILocale from '../../hocs/withAPILocale'

const WhoPage: React.FC = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    <Who />
  </Layout>
);

export default withAPILocale('who')(WhoPage);

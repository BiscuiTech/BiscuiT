import React from 'react';
import Layout from '../../components/Layout';
import Who from '../../components/Who';
import withLocale from '../../hocs/withLocale'

const WhoPage: React.FC = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    <Who />
  </Layout>
);

export default withLocale(WhoPage);

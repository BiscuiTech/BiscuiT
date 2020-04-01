import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../components/Home';
import HomeDetails from '../../components/HomeDetails';
import withAPILocale from '../../hocs/withAPILocale'

const IndexPage: React.FC = () => {
  return (
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
    >
      <Home />
      {/* <HomeDetails /> */}
    </Layout>
  );
};

export default withAPILocale('home')(IndexPage);

import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../components/Home';
import withAPILocale from '../../hocs/withAPILocale'

const IndexPage: React.FC = () => {
  return (
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
    >
      <Home
        messagesKey="homepageMessages"
      />
    </Layout>
  );
};

export default withAPILocale('common')(IndexPage);

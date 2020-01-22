import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../components/Home';
import withLocale from '../../hocs/withLocale'

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

export default withLocale(IndexPage);

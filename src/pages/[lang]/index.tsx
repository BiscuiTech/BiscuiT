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
      {/*
        TODO: add an SSG api to fetch blogposts
          and populate `pid` with the id

      */}
      <Home pid={null} />
    </Layout>
  );
};

export default withAPILocale('home')(IndexPage);

import React from 'react';
import Layout from '../../components/Layout';
import Contact from '../../components/Contact';
import withLocale from '../../hocs/withLocale'

const contact = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page">
    <Contact />
  </Layout>
);

export default withLocale(contact);

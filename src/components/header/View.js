import React from 'react';
import {Layout, Card} from '@shopify/polaris';
import Header from './Header';
import Nav from './Nav';

const View = () => {
  return (
      <Card sectioned>
        <Layout>
            <Layout.Section>
                <Header />
            </Layout.Section>
            <Layout.Section secondary>
                <Nav />
            </Layout.Section>
        </Layout>
        </Card>
  );
}

export default View;
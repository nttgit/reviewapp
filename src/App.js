import React, {useState, useCallback} from 'react';
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  Select,
  Heading, 
  TextContainer,
} from '@shopify/polaris';
import {ImportMinor} from '@shopify/polaris-icons';

export default function App() {

  function SelectExample() {
    const [selected, setSelected] = useState('addedreviews');
  
    const handleSelectChange = useCallback((value) => setSelected(value), []);
  
    const options = [
      {label: 'Added reviews', value: 'addedreviews'},
      {label: 'All products', value: 'all'},
      {label: 'No reviews', value: 'noreviews'},
    ];
  
    return (
      <Select
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    );
  }

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <TextContainer>
            <Heading element="h1">
              PRODUCT REVIEWS ADMIN PAGE | 
              <Link url="guide.html"> Document here !</Link>
            </Heading>
          </TextContainer>
        </Layout.Section>
      
        <Layout.Section oneHalf>
            <Layout.Section oneThird>
            <Card>
              <Button>Create review</Button>
              </Card>
            </Layout.Section>
            
            <Layout.Section oneThird>
            <Card>
              <Button>Create review</Button>
              </Card>
            </Layout.Section>
            
            <Layout.Section oneThird>
            <Card>
              <Button>Create review</Button>
              </Card>
            </Layout.Section>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Button>
          Sync products From Shopify
          </Button>
        </Layout.Section>
      </Layout>

        <FormLayout>
          <FormLayout.Group>
            <TextField type="text" label="" placeholder="Type to search" onChange={() => {}} />
            <SelectExample />
          </FormLayout.Group>
        </FormLayout>
    </Page>
  );
}

import React, {useCallback, useState} from 'react';
import {Layout, Card, ButtonGroup, Button, TextStyle, Select, TextField, FormLayout} from '@shopify/polaris';
import {Icon} from '@shopify/polaris';
import {RefreshMajor} from '@shopify/polaris-icons';

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { columns, data } from './Data.js';

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

function TextFieldExample() {
    const [value, setValue] = useState('');
  
    const handleChange = useCallback((newValue) => setValue(newValue), []);
  
    return <TextField value={value} onChange={handleChange} placeholder="Type to search" />;
  }

function Table() {
    const tableData = {
      columns,
      data,
    };
   
    return (
      <DataTableExtensions
        {...tableData}
      >
        <DataTable
          noHeader
          defaultSortField="id"
          pagination
          highlightOnHover
          defaultSortAsc
          filter={false}
        />
      </DataTableExtensions>
    );
}

const ContentView = () => {
  return (
    <div>
        <Card sectioned>
            <div style={{textAlign: 'right',marginBottom:"10px"}}>
                <Layout>
                    <Layout.Section>
                        <TextStyle variation="strong">Total: 56 products.</TextStyle>
                    </Layout.Section>
                </Layout>
            </div>

            <div style={{marginBottom:"10px"}}>
                <Layout>
                <Layout.Section oneHalf>
                        <ButtonGroup spacing="loose">
                            <Button>CREATE REVIEW</Button>
                            <Button>IMPORT EXCEL</Button>
                            <Button>EXPORT EXCEL</Button>
                        </ButtonGroup>
                    </Layout.Section>
                    <Layout.Section oneHalf>
                        <div style={{textAlign:'right'}}>
                        <button style={{backgroundColor:"#50B83C"}} className="Polaris-Button">
                            <span style={{marginRight: "10px"}}><Icon source={RefreshMajor} /></span>
                            
                            Sync products From Shopify
                            </button>
                        </div>
                    </Layout.Section>
                </Layout>
            </div>

            <div>
                <Layout>
                    <Layout.Section>
                        <FormLayout>
                            <FormLayout.Group>
                                <TextFieldExample />
                                <SelectExample />
                            </FormLayout.Group>
                        </FormLayout>
                        <Table />
                    </Layout.Section>
                </Layout>
            </div>
        </Card>
    </div>
  );
}

export default ContentView;
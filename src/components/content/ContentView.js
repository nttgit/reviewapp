import React, {useCallback, useState} from 'react';
import {Layout, Card, ButtonGroup, Button, TextStyle, Select, 
  TextField, FormLayout, Popover, ActionList, 
  Modal, TextContainer, Stack, DropZone, Thumbnail, Caption,
  Banner, List, RadioButton} from '@shopify/polaris';
import {Icon} from '@shopify/polaris';
import {RefreshMajor} from '@shopify/polaris-icons';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import {datas} from './Data';
import Pagination from "react-js-pagination";
import ReactStars from "react-rating-stars-component";

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

function TableProduct() {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleImportedAction = useCallback(
    () => console.log('action'),
    [],
  );

  const handleExportedAction = useCallback(
    () => console.log('Exported action'),
    [],
  );

  const activator = (
    <Button onClick={toggleActive} disclosure>
      Action
    </Button>
  );

  const ButtonAction = (Props) => {
    return (
      <Popover key={Props.key} active={active} activator={activator} onClose={toggleActive}>
        <ActionList
          items={[
            {
              content: 'Publish',
              onAction: handleImportedAction,
            },
            {
              content: 'Unpublish',
              onAction: handleExportedAction,
            },
            {
              content: 'Delete',
              onAction: handleExportedAction,
            },
            {
              content: 'Import Reviews',
              onAction: handleExportedAction,
            },
          ]}
        />
      </Popover>
    );
  }

    return (
      <div style={{height:"400px",overflow:"auto"}}>
      <Table hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {datas.map((data) => (
            <tr key={data.id}>
              <td>
                <img src="https://cdn.shopify.com/s/files/1/0504/3857/0162/products/71t-nm5mS6L._UL1500.jpg?v=1603079825" style={{width:"50px",marginRight:"10px"}} />
                <Link to="/reviews-detail">{data.product}</Link>
              </td>
              <td>
                <ReactStars
                  count={5}
                  size={18}
                  emptyIcon={<i className="far fa-star"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  value={data.rating}
                  edit={false}
                />
                {data.rating} reviews
                </td>
              <td key={data.id}>
                <ButtonAction key={data.id} />
              </td>
            </tr>
          ))}

        </tbody>
      </Table>

      </div>
    );
}

function ModalSync() {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = <button onClick={handleChange} className="Polaris-Button Polaris-Button--primary"><span style={{marginRight: "5px",width:"18px",position:"relative",top:"3px"}}><Icon source={RefreshMajor} /></span> Sync products From Shopify</button>;

  return (
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Sync all products from Store?"
        primaryAction={{
          content: 'Agree',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Disagree',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
            Are you sure you want to go to sync all products.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
  );
}

function ModalExportExel() {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = <Button onClick={handleChange}>EXPORT EXCEL</Button>

  return (
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Export product reviews?"
        primaryAction={{
          content: 'Agree',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Disagree',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
            Are you sure you want to export all product reviews to Excel file?
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
  );
}

function DropZoneFile() {
  const [file, setFile] = useState();

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setFile((file) => acceptedFiles[0]),
    [],
  );

  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const fileUpload = !file && <DropZone.FileUpload />;
  const uploadedFile = file && (
    <Stack>
      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.indexOf(file.type) > 0
            ? window.URL.createObjectURL(file)
            : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
        }
      />
      <div>
        {file.name} <Caption>{file.size} bytes</Caption>
      </div>
    </Stack>
  );

  return (
    <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
      {uploadedFile}
      {fileUpload}
    </DropZone>
  );
}

function ModalImportExel() {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = <Button onClick={handleChange}>IMPORT EXCEL</Button>

  return (
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Import reviews"
        primaryAction={{
          content: 'Import',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Close',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
        <Stack vertical>
            <DropZoneFile />

            <TextContainer>
            <p style={{fontWeight:"bold"}}>
              Maximum 2000 lines in file can be import.
            </p>
            <p>
              We suggested you to split the file into smaller ones to making the debug of the reviews, a little easier.
            </p>
            <p>
              Download our <a href="https://apps.omegatheme.com/customer-reviews/reviews_import.xlsx">.xlsx template</a> to see an example of the required format.
            </p>
            <p>
              Go to <a href="https://apps.omegatheme.com/customer-reviews/guide.html" target="_blank">here</a> to see <span style={{fontWeight:"bold"}}>How to get product's handle for importing data.</span>
            </p>
          </TextContainer>
          </Stack>
        </Modal.Section>
      </Modal>
  );
}

function ModalCreateReview() {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = <Button onClick={handleChange}>CREATE REVIEW</Button>

  // Choose product
  const [selectedProduct, setSelectedProduct] = useState('');
  const handleSelectChangeProduct = useCallback((value) => setSelectedProduct(value), []);
  const optionsProduct = [
    {label: 'Beetlejuice 1', value: 'sp1'},
  ];
  // 

  // Name
  const [valueName, setValueName] = useState('');
  const handleChangeName = useCallback((newValue) => setValueName(newValue), []);
  // 

  // Title
  const [valueTitle, setValueTitle] = useState('');
  const handleChangeTitle = useCallback((newValue) => setValueTitle(newValue), []);
  // 

  // Email
  const [valueEmail, setValueEmail] = useState('');
  const handleChangeEmail = useCallback((newValue) => setValueEmail(newValue), []);
  // 

  // Message
  const [valueMessage, setValueMessage] = useState('');
  const handleChangeMessage = useCallback((newValue) => setValueMessage(newValue), []);
  // 

  // Rating
  const [selectedRating, setSelectedRating] = useState('4star');
  const handleSelectChangeRating = useCallback((value) => setSelectedRating(value), []);
  const optionsRating = [
    {label: '1 star', value: '1star'},
    {label: '2 stars', value: '2star'},
    {label: '3 stars', value: '3star'},
    {label: '4 stars', value: '4star'},
    {label: '5 stars', value: '5star'},
  ];
  // 

  // Image
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const hasError = rejectedFiles.length > 0;

  const handleDrop = useCallback(
    (_droppedFiles, acceptedFiles, rejectedFiles) => {
      setFiles((files) => [...files, ...acceptedFiles]);
      setRejectedFiles(rejectedFiles);
    },
    [],
  );

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={window.URL.createObjectURL(file)}
          />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  const errorMessage = hasError && (
    <Banner
      title="The following images couldn’t be uploaded:"
      status="critical"
    >
      <List type="bullet">
        {rejectedFiles.map((file, index) => (
          <List.Item key={index}>
            {`"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`}
          </List.Item>
        ))}
      </List>
    </Banner>
  );

  const [valueRadioRecommend, setValueRadioRecommend] = useState('yesRecommend');
  const handleChangeRadioRecommend = useCallback(
      (_checked, newValue) => setValueRadioRecommend(newValue),
      [],
  );
  // 

  // Purchased customers
  const [valueRadioPurchased, setValueRadioPurchased] = useState('yesPurchased');
  const handleChangeRadioPurchased = useCallback(
      (_checked, newValue) => setValueRadioPurchased(newValue),
      [],
  );
  // 

  // Publish this review
  const [valueRadioPublish, setValueRadioPublish] = useState('yesPublish');
  const handleChangeRadioPublish = useCallback(
      (_checked, newValue) => setValueRadioPublish(newValue),
      [],
  );
  // 

  // Featured review
  const [valueRadioFeatured, setValueRadioFeatured] = useState('yesFeatured');
  const handleChangeRadioFeatured = useCallback(
      (_checked, newValue) => setValueRadioFeatured(newValue),
      [],
  );

  // 

  return (
      <Modal
        large
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Create new review"
        primaryAction={{
          content: 'Save',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Close',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <div style={{marginBottom:"15px"}}>
          <Layout>
            <Layout.Section oneHalf>
              <Select label="Choose product" options={optionsProduct} onChange={handleSelectChangeProduct} value={selectedProduct} />
            </Layout.Section>
            <Layout.Section oneHalf>
              <TextField label="Name" value={valueName} onChange={handleChangeName} />
            </Layout.Section>
          </Layout>
          </div>

          <div style={{marginBottom:"15px"}}>
          <Layout>
          <Layout.Section oneHalf>
              <TextField label="Title" value={valueTitle} onChange={handleChangeTitle} />
            </Layout.Section>
            <Layout.Section oneHalf>
              <TextField label="Email" value={valueEmail} onChange={handleChangeEmail} />
            </Layout.Section>
          </Layout>
          </div>

          <div style={{marginBottom:"15px"}}>
          <Layout>
            <Layout.Section oneHalf>
              <TextField label="Message" value={valueMessage} onChange={handleChangeMessage} multiline={3} />
            </Layout.Section>
            <Layout.Section oneHalf>
              <Select label="Rating" options={optionsRating} onChange={handleSelectChangeRating} value={selectedRating} />
            </Layout.Section>
          </Layout>
          </div>

          <div style={{marginBottom:"15px"}}>
          <Layout>
            <Layout.Section>
            <Stack vertical>
              {errorMessage}
              <DropZone accept="image/*" type="image" onDrop={handleDrop} label="Add photo">
                {uploadedFiles}
                {fileUpload}
              </DropZone>
            </Stack>
            </Layout.Section>
          </Layout>
          </div>

          <div style={{marginBottom:"15px"}}>
          <Layout>
            <Layout.Section oneHalf>
              <div className="Polaris-Labelled__LabelWrapper">
                <div className="Polaris-Label"><label className="Polaris-Label__Text">Publish date</label></div>
              </div>
              <div className="Polaris-Connected">
                <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                  <div className="Polaris-TextField Polaris-TextField--hasValue">
                    <input type="datetime-local" className="Polaris-TextField__Input"></input>
                    <div className="Polaris-TextField__Backdrop"></div>
                  </div>
                </div>
              </div>
            </Layout.Section>
            <Layout.Section oneHalf>
            <p>Recommend this product</p>
            <div style={{marginTop:"15px"}}>
              <Stack>
                <RadioButton
                    label="Yes"
                    checked={valueRadioRecommend === 'yesRecommend'}
                    id="yesRecommend"
                    name="yesRecommend"
                    onChange={handleChangeRadioRecommend}
                />
                <RadioButton
                    label="No"
                    id="noRecommend"
                    name="noRecommend"
                    checked={valueRadioRecommend === 'noRecommend'}
                    onChange={handleChangeRadioRecommend}
                />
            </Stack>
            </div>
            </Layout.Section>
          </Layout>
          </div>

          <div style={{marginBottom:"15px"}}>
          <Layout>
          <Layout.Section oneHalf>
            <p>Purchased customers</p>
            <div style={{marginTop:"10px"}}>
              <Stack>
                <RadioButton
                    label="Yes"
                    checked={valueRadioPurchased === 'yesPurchased'}
                    id="yesPurchased"
                    name="yesPurchased"
                    onChange={handleChangeRadioPurchased}
                />
                <RadioButton
                    label="No"
                    id="noPurchased"
                    name="noPurchased"
                    checked={valueRadioPurchased === 'noPurchased'}
                    onChange={handleChangeRadioPurchased}
                />
              </Stack>
            </div>
            </Layout.Section>
            <Layout.Section oneHalf>
            <p>Publish this review</p>
            <div style={{marginTop:"10px"}}>
              <Stack>
                <RadioButton
                    label="Yes"
                    checked={valueRadioPublish === 'yesPublish'}
                    id="yesPublish"
                    name="yesPublish"
                    onChange={handleChangeRadioPublish}
                />
                <RadioButton
                    label="No"
                    id="noPublish"
                    name="noPublish"
                    checked={valueRadioPublish === 'noPublish'}
                    onChange={handleChangeRadioPublish}
                />
            </Stack>
            </div>
            </Layout.Section>
          </Layout>
          </div>

          <div style={{marginBottom:"15px"}}>
          <Layout>
          <Layout.Section oneHalf>
            <p>Featured review</p>
            <div style={{marginTop:"10px"}}>
              <Stack>
                <RadioButton
                    label="Yes"
                    checked={valueRadioFeatured === 'yesFeatured'}
                    id="yesFeatured"
                    name="yesFeatured"
                    onChange={handleChangeRadioFeatured}
                />
                <RadioButton
                    label="No"
                    id="noFeatured"
                    name="noFeatured"
                    checked={valueRadioFeatured === 'noFeatured'}
                    onChange={handleChangeRadioFeatured}
                />
            </Stack>
            </div>
            </Layout.Section>
          </Layout>
          </div>

        </Modal.Section>
      </Modal>
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
                            <ModalCreateReview />
                            <ModalImportExel />
                            <ModalExportExel />
                        </ButtonGroup>
                    </Layout.Section>
                    <Layout.Section oneHalf>
                        <div style={{textAlign:'right'}}>
                        <ModalSync />
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
                    </Layout.Section>

                    <Layout.Section>
                      <TableProduct />
                    </Layout.Section>
                </Layout>
            </div>
        </Card>
    </div>
  );
}

export default ContentView;
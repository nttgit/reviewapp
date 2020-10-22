import React, {useCallback, useState} from 'react';
import {Layout, Checkbox, TextField, Badge, Button, Card, ProgressBar, Tooltip, Modal, TextContainer, Stack, DropZone, Thumbnail, Caption,
    Banner, List, RadioButton, Select} from '@shopify/polaris';
import ReactStars from "react-rating-stars-component";
import {Icon} from '@shopify/polaris';
import {MobileChevronMajor, EditMajor, ViewMajor, DeleteMajor} from '@shopify/polaris-icons';
import {Redirect,Link} from 'react-router-dom';
import { Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/reviewDetail.css';

function ModalDelete() {
    const [active, setActive] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);
    const activator = <button onClick={handleChange} className="Polaris-Button Polaris-Button--plain"><Icon source={DeleteMajor} color="blue" /></button>;
    
    return (
        <Modal
          activator={activator}
          open={active}
          onClose={handleChange}
          title="Delete this review?"
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
              Are you sure you want to delete this review? This action cannot be undone.
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
    );
}

function ModalCreateReview() {
    const [active, setActive] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);
    const activator = <button onClick={handleChange} className="Polaris-Button Polaris-Button--plain"> <Icon source={EditMajor} color="blue" /></button>;
  
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
          title="Edit review"
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
                <TextField label="Name" value={valueName} onChange={handleChangeName} />
              </Layout.Section>
              <Layout.Section oneHalf>
                <TextField label="Title" value={valueTitle} onChange={handleChangeTitle} />
              </Layout.Section>
            </Layout>
            </div>
  
            <div style={{marginBottom:"15px"}}>
            <Layout>
              <Layout.Section oneHalf>
                <TextField label="Email" value={valueEmail} onChange={handleChangeEmail} />
              </Layout.Section>
              <Layout.Section oneHalf>
                <TextField label="Message" value={valueMessage} onChange={handleChangeMessage} multiline={3} />
              </Layout.Section>
            </Layout>
            </div>
  
            <div style={{marginBottom:"15px"}}>
            <Layout>
              <Layout.Section oneHalf>
                <Select label="Rating" options={optionsRating} onChange={handleSelectChangeRating} value={selectedRating} />
              </Layout.Section>
              <Layout.Section oneHalf>

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

  function ModalImportReview() {
    const [active, setActive] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);
    const handleChangeAgree = () => {
       window.location.assign("/import-reviews");
    };
    const activator = <Button onClick={handleChange} primary size="slim">IMPORT REVIEWS</Button>;
    
    return (
        <Modal
          activator={activator}
          open={active}
          onClose={handleChange}
          title="Go to import reviews page?"
          primaryAction={{
            content: 'Agree',
            onAction: handleChangeAgree, 
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
              Are you sure you want to go to import reviews page.
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
    );
}

const ReviewsDetail = () => {

    const [valueTextSearch, setValueTextSearch] = useState('');
    const handleChangeTextSearch = useCallback((newValue) => setValueTextSearch(newValue), []);

    // checkbox
    const [checkedHeader, setCheckedHeader] = useState(false);
    const handleChangeHeader = useCallback((newChecked) => setCheckedHeader(newChecked), []);

    return (
        
        <div>
            <Card sectioned>
            <div style={{width:"90%",margin:"0 auto"}}>
                <Layout>
                    <Layout.Section>
                        <Link to="/" style={{marginRight:"15px"}}>
                            <button className="Polaris-Button Polaris-Button--plain">
                                <span style={{marginRight: "5px",width:"15px",position:"relative",top:"3px"}}>
                                    <Icon source={MobileChevronMajor} />
                                    </span> 
                            List Reivews
                            </button>
                        </Link>
                        <Link to="#" style={{marginRight:"15px"}}>
                            <button className="Polaris-Button Polaris-Button--plain">
                                <span style={{marginRight: "5px",width:"15px",position:"relative",top:"3px"}}>
                                    <Icon source={EditMajor} />
                                    </span> 
                            Edit Product
                            </button>
                        </Link>
                        <Link to="#" style={{marginRight:"15px"}}>
                            <button className="Polaris-Button Polaris-Button--plain">
                                <span style={{marginRight: "5px",width:"15px",position:"relative",top:"3px"}}>
                                    <Icon source={ViewMajor} />
                                    </span> 
                            View on store
                            </button>
                        </Link>
                    </Layout.Section>
                </Layout>
                </div>
            </Card>
            
            <Card >
                <div style={{width:"90%",margin:"0 auto"}}>
                <Layout>
                    <Layout.Section>
                        <Row>
                            <Col xs="12" sm="6" md="4">
                                <Row>
                                    <Col xs="12" md="6">
                                    <div style={{textAlign: 'center',paddingTop: "50px"}}>
                                        <p style={{color:"#FFB85D",fontSize:"30px"}}>4.50/5</p>
                                    
                                        <div style={{display:"flex",justifyContent:"center",lineHeight:"initial"}}>
                                            <ReactStars 
                                                count={5}
                                                size={40}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                                value={4.5}
                                                edit={false}
                                                isHalf={true}
                                            />
                                        </div>
                                    </div>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <div>
                                        <ul className="clUl">
                                            <li className="clLi">
                                                <div style={{display:"flex"}}>
                                                    <span className="textStar">1</span> 
                                                    <img className="imgStar" src="https://apps.omegatheme.com/customer-reviews/assets/images/rate-star.png" />
                                                    <ProgressBar progress={25} />
                                                    <span className="textStar textStarRight">1</span> 
                                                </div>
                                            </li>
                                            <li className="clLi">
                                                <div style={{display:"flex"}}>
                                                    <span className="textStar">2</span> 
                                                    <img className="imgStar" src="https://apps.omegatheme.com/customer-reviews/assets/images/rate-star.png" />
                                                    <ProgressBar progress={75} />
                                                    <span className="textStar textStarRight">1</span> 
                                                </div>
                                            </li>
                                            <li className="clLi">
                                                <div style={{display:"flex"}}>
                                                    <span className="textStar">3</span> 
                                                    <img className="imgStar" src="https://apps.omegatheme.com/customer-reviews/assets/images/rate-star.png" />
                                                    <ProgressBar progress={50} />
                                                    <span className="textStar textStarRight">1</span> 
                                                </div>
                                            </li>
                                            <li className="clLi">
                                                <div style={{display:"flex"}}>
                                                    <span className="textStar">4</span> 
                                                    <img className="imgStar" src="https://apps.omegatheme.com/customer-reviews/assets/images/rate-star.png" />
                                                    <ProgressBar progress={75} />
                                                    <span className="textStar textStarRight">5</span> 
                                                </div>
                                            </li>
                                            <li className="clLi">
                                                <div style={{display:"flex"}}>
                                                    <span className="textStar">5</span> 
                                                    <img className="imgStar" src="https://apps.omegatheme.com/customer-reviews/assets/images/rate-star.png" />
                                                    <ProgressBar progress={95} />
                                                    <span className="textStar textStarRight">1</span> 
                                                </div>
                                            </li>
                                        </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        
                            <Col xs="12" sm="6" md="8">
                                <Row>
                                    <Col xs="12" md="3" style={{textAlign:"right"}}>
                                    <div className="imgProduct">
                                        <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0504/3857/0162/products/71t-nm5mS6L._UL1500.jpg?v=1603079825" />
                                    </div>
                                    </Col>

                                    <Col xs="12" md="9">
                                    <div className="productInfo">
                                        <div style={{marginBottom:"15px"}}>
                                            <a href="#" style={{fontSize:"18px"}}>Swatch Originals Tresorama Silver Dial Stainless Steel Ladies Watch GE707B</a>
                                        </div>
                                        <div>
                                            <div className="clBadge"><Badge status="success">3 Published</Badge></div>
                                            <div className="clBadge"><Badge>0 Unpublished</Badge></div>
                                            <div className="clBadge"><Badge status="success">2 Featured</Badge></div>
                                        </div>
                                        <div style={{marginTop:"20px"}}>
                                            <ModalImportReview />
                                        </div>
                                    </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    

                        <div style={{margin:"10px 0"}}>
                            <TextField label="" placeholder="Type to search" value={valueTextSearch} onChange={handleChangeTextSearch} />
                        </div>

                        <div>
                            <Table hover>
                                <thead>
                                <tr>
                                    <th style={{width:"50px"}}><Checkbox label="" checked={checkedHeader} onChange={handleChangeHeader} /></th>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Feedback</th>
                                    <th>Source</th>
                                    <th>Photo</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{width:"50px"}}><Checkbox label="" checked={checkedHeader} onChange={handleChangeHeader} /></td>
                                    <td>Name</td>
                                    <td>
                                    <ReactStars 
                                        count={5}
                                        size={24}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        value={4.5}
                                        edit={false}
                                        isHalf={true}
                                    />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="clBadge"><Badge status="success">Published</Badge></div>
                                        <div className="clBadge"><Badge>Unpublished</Badge></div>
                                        <div className="clBadge"><Badge status="success">Featured</Badge></div>
                                    </td>
                                    <td>
                                    <div className="clIcon">
                                    <Tooltip active content="Edit" active={false}>
                                        <ModalCreateReview />
                                    </Tooltip>
                                    </div>
                                    <div className="clIcon">
                                    <Tooltip active content="Delete" active={false}>
                                        <ModalDelete />
                                    </Tooltip>
                                    </div>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Layout.Section>
                </Layout>
                </div>
            </Card>
        </div>
    );
}

export default ReviewsDetail;
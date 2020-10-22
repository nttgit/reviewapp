import React, {useCallback, useState} from 'react';
import {Layout, Checkbox, TextField, Badge, Button, Card, ProgressBar, Tooltip, Modal, TextContainer, Stack, DropZone, Thumbnail, Caption,
    Banner, List, RadioButton, Select} from '@shopify/polaris';
import {Icon} from '@shopify/polaris';
import {MobileChevronMajor, EditMajor, ViewMajor, DeleteMajor} from '@shopify/polaris-icons';
import { Link} from 'react-router-dom';

const SettingLayout = () => {

    // Product url
    const [valueProductUrl, setValueProductUrl] = useState('');
    const handleChangeProductUrl = useCallback((newValue) => setValueProductUrl(newValue), []);
    // 

    // Sort by
    const [selectedSortBy, setSelectedSortBy] = useState('mostrecent');
    const handleSelectChangeSortBy = useCallback((value) => setSelectedSortBy(value), []);
    const optionsSortBy = [
        {label: 'Top rated', value: 'toprate'},
        {label: 'Most recent', value: 'mostrecent'},
    ];
    //   

    // Only verified purchase (Amazon's products)
    const [valueOnlyVerified, setValueOnlyVerified] = useState('yesOnlyVerified');
    const handleChangeOnlyVerified = useCallback(
        (_checked, newValue) => setValueOnlyVerified(newValue),
        [],
    );
    // 

    // Filter By Star
    const [selectedFilterByStar, setSelectedFilterByStar] = useState('allstar');
    const handleSelectChangeFilterByStar = useCallback((value) => setSelectedFilterByStar(value), []);
    const optionsFilterByStar = [
        {label: 'All stars', value: 'allstar'},
        {label: '5 stars', value: '5star'},
        {label: '4 stars', value: '4star'},
        {label: '3 stars', value: '3star'},
        {label: '2 stars', value: '2star'},
        {label: '1 stars', value: '1star'},
        {label: 'All Positive', value: 'allpositive'},
        {label: 'All Critical', value: 'allcritical'},
    ];
    // 

    // Only image and video review
    const [valueOnlyImage, setValueOnlyImage] = useState('noOnlyImage');
    const handleChangeOnlyImage = useCallback(
        (_checked, newValue) => setValueOnlyImage(newValue),
        [],
    );
    //

    // Show blank review's content
    const [valueShowBlankReviewContent, setValueShowBlankReviewContent] = useState('noShowBlankReviewContent');
    const handleShowBlankReviewContent = useCallback(
        (_checked, newValue) => setValueShowBlankReviewContent(newValue),
        [],
    );
    //

    // Default reviewer's name when blank
    const [valueDefaultReviewerName, setValueDefaultReviewerName] = useState('');
    const handleChangeDefaultReviewerName = useCallback((newValue) => setValueDefaultReviewerName(newValue), []);
    // 

    // Default review's title when blank
    const [valueDefaultReviewerTitle, setValueDefaultReviewerTitle] = useState('');
    const handleChangeDefaultReviewerTitle = useCallback((newValue) => setValueDefaultReviewerTitle(newValue), []);
    // 

    return (
        <div>
            <Card sectioned>
                <div style={{width:"90%",margin:"0 auto"}}>
                <Layout>
                    <Layout.Section>
                        <Link to="/reviews-detail" style={{marginRight:"15px"}}>
                            <button className="Polaris-Button Polaris-Button--plain">
                                <span style={{marginRight: "5px",width:"15px",position:"relative",top:"3px"}}>
                                    <Icon source={MobileChevronMajor} />
                                    </span> 
                            Product Review Detail
                            </button>
                        </Link>
                    </Layout.Section>
                </Layout>
                </div>
            </Card>
            <Card >
                <div style={{width:"90%",margin:"0 auto",paddingBottom:"30px"}}>
                <Layout>
                    <Layout.Section secondary>
                        <div style={{border:"1px solid #ECECEC",padding:"10px"}}>
                            <div style={{marginBottom:"15px"}}>
                                <TextField label="Product's URL" value={valueProductUrl} onChange={handleChangeProductUrl} />
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <Select label="Sort by" options={optionsSortBy} onChange={handleSelectChangeSortBy} value={selectedSortBy} />
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <p>Only verified purchase (Amazon's products)</p>
                                <Stack>
                                    <RadioButton
                                        label="Yes"
                                        checked={valueOnlyVerified === 'yesOnlyVerified'}
                                        id="yesOnlyVerified"
                                        name="yesOnlyVerified"
                                        onChange={handleChangeOnlyVerified}
                                    />
                                    <RadioButton
                                        label="No"
                                        id="noOnlyVerified"
                                        name="noOnlyVerified"
                                        checked={valueOnlyVerified === 'noOnlyVerified'}
                                        onChange={handleChangeOnlyVerified}
                                    />
                                </Stack>
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <Select label="Filter by star" options={optionsFilterByStar} onChange={handleSelectChangeFilterByStar} value={selectedFilterByStar} />
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <p>Only image and video review</p>
                                <Stack>
                                    <RadioButton
                                        label="Yes"
                                        checked={valueOnlyImage === 'yesOnlyImage'}
                                        id="yesOnlyImage"
                                        name="yesOnlyImage"
                                        onChange={handleChangeOnlyImage}
                                    />
                                    <RadioButton
                                        label="No"
                                        id="noOnlyImage"
                                        name="noOnlyImage"
                                        checked={valueOnlyImage === 'noOnlyImage'}
                                        onChange={handleChangeOnlyImage}
                                    />
                                </Stack>
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <p>Show blank review's content</p>
                                <Stack>
                                    <RadioButton
                                        label="Yes"
                                        checked={valueShowBlankReviewContent === 'yesShowBlankReviewContent'}
                                        id="yesShowBlankReviewContent"
                                        name="yesShowBlankReviewContent"
                                        onChange={handleShowBlankReviewContent}
                                    />
                                    <RadioButton
                                        label="No"
                                        id="noShowBlankReviewContent"
                                        name="noShowBlankReviewContent"
                                        checked={valueShowBlankReviewContent === 'noShowBlankReviewContent'}
                                        onChange={handleShowBlankReviewContent}
                                    />
                                </Stack>
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <TextField label="Default reviewer's name when blank" value={valueDefaultReviewerName} onChange={handleChangeDefaultReviewerName} />
                            </div>
                            <div style={{marginBottom:"15px"}}>
                                <TextField label="Default review's title when blank" value={valueDefaultReviewerTitle} onChange={handleChangeDefaultReviewerTitle} />
                            </div>
                            <div style={{marginBottom:"20px"}}>
                                <Button>SEARCH</Button>
                            </div>
                        </div>
                    </Layout.Section>

                    <Layout.Section>
                        <div style={{border:"1px solid #ECECEC",padding:"10px",height:"680px"}}>
                            <p style={{fontWeight:"bold",fontSize:"20px",textAlign:"center",marginTop:"100px"}}>No reviews found</p>
                        </div>
                    </Layout.Section>
                </Layout>
                </div>
            </Card>
        </div>
    );
}

export default SettingLayout;
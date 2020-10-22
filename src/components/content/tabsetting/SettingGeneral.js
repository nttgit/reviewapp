import React, {useCallback, useState} from 'react';
import {Layout, Card, Button, Page, Heading, Stack, RadioButton, Select, Checkbox, TextField} from '@shopify/polaris';

const SettingGeneral = () => {

    // Auto publish
    const [valuePlush, setValuePlush] = useState('enabled');
    const handleChangePlush = useCallback(
        (_checked, newValue) => setValuePlush(newValue),
        [],
    );
    // 

    // Insert shortcode
    const [selectedShortcode, setSelectedShortcode] = useState('automatic');
    const handleSelectChangeShortcode = useCallback((value) => setSelectedShortcode(value), []);
    const optionsShortcode = [
      {label: 'Automatic', value: 'automatic'},
      {label: 'Manual', value: 'manual'},
    ];
    // 

    // Only show featured reviews
    const [valueShowReview, setValueShowReview] = useState('no');
    const handleChangeShowReview = useCallback(
        (_checked, newValue) => setValueShowReview(newValue),
        [],
    );
    // 

    // Email Settings
    const [checkedEmail, setCheckedEmail] = useState(false);
    const handleChangeEmail = useCallback(newChecked => setCheckedEmail(newChecked), []);
    const [valueEmail, setValueEmail] = useState('');
    const handleChangetextEmail = useCallback((newValue) => setValueEmail(newValue), []);
    const [valueRadioSendMail, setValueRadioSendMail] = useState('sendmailno');
    const handleChangeRadioSendMail = useCallback(
        (_checked, newValue) => setValueRadioSendMail(newValue),
        [],
    );
    // 

    // Review per page
    const [valueReviewPerPage, setValueReviewPerPage] = useState('5');
    const handleChangeReviewPerPage = useCallback((newValue) => setValueReviewPerPage(newValue), []);
    // 

    // Maximum characters in reviews
    const [valueCharactersInReview, setValueCharactersInReview] = useState('500');
    const handleChangeCharactersInReview = useCallback((newValue) => setValueCharactersInReview(newValue), []);
    // 

    // Maximum images can be uploaded in reviews
    const [valueMaxImages, setValueMaxImages] = useState('5');
    const handleChangeMaxImages = useCallback((newValue) => setValueMaxImages(newValue), []);
    // 

    // Review listing text
    const [valueReviewListText, setValueReviewListText] = useState('Reviews for %s');
    const handleChangeReviewListText = useCallback((newValue) => setValueReviewListText(newValue), []);

    const [valueAverageReview, setValueAverageReview] = useState('Average Reviews');
    const handleChangeAverageReview = useCallback((newValue) => setValueAverageReview(newValue), []);

    const [valueAgreeText, setValueAgreeText] = useState('Yes');
    const handleChangeAgreeText = useCallback((newValue) => setValueAgreeText(newValue), []);

    const [valueDeclineText, setValueDeclineText] = useState('No');
    const handleChangeDeclineText = useCallback((newValue) => setValueDeclineText(newValue), []);
    // 

    // Review form text
    const [valueAuthorName, setValueAuthorName] = useState('Name');
    const handleChangeAuthorName = useCallback((newValue) => setValueAuthorName(newValue), []);

    const [valueAuthorNamePlaceholder, setValueAuthorNamePlaceholder] = useState('Enter your name');
    const handleChangeAuthorNamePlaceholder = useCallback((newValue) => setValueAuthorNamePlaceholder(newValue), []);

    const [valueAuthorEmail, setValueAuthorEmail] = useState('Email');
    const handleChangeAuthorEmail = useCallback((newValue) => setValueAuthorEmail(newValue), []);

    const [valueAuthorEmailPlaceholder, setValueAuthorEmailPlaceholder] = useState('john.smith@example.com');
    const handleChangeAuthorEmailPlaceholder = useCallback((newValue) => setValueAuthorEmailPlaceholder(newValue), []);

    const [valueReviewTitle, setValueReviewTitle] = useState('Title');
    const handleChangeReviewTitle = useCallback((newValue) => setValueReviewTitle(newValue), []);

    const [valueReviewTitlePlaceholder, setValueReviewTitlePlaceholder] = useState('Enter title');
    const handleChangeReviewTitlePlaceholder = useCallback((newValue) => setValueReviewTitlePlaceholder(newValue), []);

    const [valueReviewMessage, setValueReviewMessage] = useState('Review');
    const handleChangeReviewMessage = useCallback((newValue) => setValueReviewMessage(newValue), []);

    const [valueReviewMessagePlaceholder, setValueReviewMessagePlaceholder] = useState('Write your review');
    const handleChangeReviewMessagePlaceholder = useCallback((newValue) => setValueReviewMessagePlaceholder(newValue), []);

    const [valueReviewButton, setValueReviewButton] = useState('Write a review');
    const handleChangeReviewButton = useCallback((newValue) => setValueReviewButton(newValue), []);

    const [valueReviewSubmitButton, setValueReviewSubmitButton] = useState('Submit');
    const handleChangeReviewSubmitButton = useCallback((newValue) => setValueReviewSubmitButton(newValue), []);

    const [valueSuccessMessage, setValueSuccessMessage] = useState('Thanks for your review');
    const handleChangeSuccessMessage = useCallback((newValue) => setValueSuccessMessage(newValue), []);

    const [valueErrorMessage, setValueErrorMessage] = useState('Something wrong with our review system. We will fix it as soon as.');
    const handleChangeErrorMessage = useCallback((newValue) => setValueErrorMessage(newValue), []);

    const [valueRatingField, setValueRatingField] = useState('Rating');
    const handleChangeRatingField = useCallback((newValue) => setValueRatingField(newValue), []);

    const [valueRecommendField, setValueRecommendField] = useState('Would you recommend this product?');
    const handleChangeRecommendField = useCallback((newValue) => setValueRecommendField(newValue), []);

    const [valueUploadImageButton, setValueUploadImageButton] = useState('+ Photo');
    const handleChangeUploadImageButton = useCallback((newValue) => setValueUploadImageButton(newValue), []);
    // 

    // Show "Verified Purchase" text
    const [valueVerifiedPurchase, setValueVerifiedPurchase] = useState('yesVerifiedPurchase');
    const handleChangeVerifiedPurchase = useCallback(
        (_checked, newValue) => setValueVerifiedPurchase(newValue),
        [],
    );
    // 

    // Show Recommend Customer text
    const [valueRecommendCustomerText, setValueRecommendCustomerText] = useState('yesRecommendCustomerText');
    const handleChangeRecommendCustomerText = useCallback(
        (_checked, newValue) => setValueRecommendCustomerText(newValue),
        [],
    );
    // 

    // Asking customer for a review
    const [valueAskingCustomter, setValueAskingCustomter] = useState('noAskingCustomter');
    const handleChangeAskingCustomter = useCallback(
        (_checked, newValue) => setValueAskingCustomter(newValue),
        [],
    );
    // 

    // Featured reviews box badge
    const [valueFeaturedReviews, setValueFeaturedReviews] = useState('noFeaturedReviews');
    const handleChangeFeaturedReviews = useCallback(
        (_checked, newValue) => setValueFeaturedReviews(newValue),
        [],
    );
    // 

    // Custom Css
    const [valueCustomCss, setValueCustomCss] = useState('');
    const handleChangeCustomCss = useCallback((newValue) => setValueCustomCss(newValue), []);
    // 
    
    return (
        <Page>
            {/* button */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section>
                    <div style={{textAlign: 'right'}}>
                        <Button primary>Save</Button>
                    </div>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Auto publish */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Auto publish</Heading>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <Stack vertical>
                        <RadioButton
                            label="Enabled"
                            helpText="New reviews automatically published."
                            checked={valuePlush === 'enabled'}
                            id="enabled"
                            name="enabled"
                            onChange={handleChangePlush}
                        />
                        <RadioButton
                            label="Disabled"
                            helpText="You must manually publish new reviews."
                            id="disabled"
                            name="disabled"
                            checked={valuePlush === 'disabled'}
                            onChange={handleChangePlush}
                        />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Insert shortcode */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Insert shortcode</Heading>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <Select
                        label=""
                        options={optionsShortcode}
                        onChange={handleSelectChangeShortcode}
                        value={selectedShortcode}
                        />
                        {
                            selectedShortcode == 'manual' ? 
                            <p style={{marginTop:"8px",color:"#666",fontStyle:"italic"}}>
                                Almost Shopify themes can be automatic added shortcode. If you have trouble with your themes, you should add shortcode manual or contact us 
                                <a href="mailto:contact@omegatheme.com" style={{textDecoration:"none"}}> contact@omegatheme.com</a>
                            </p>
                            : ""
                        }
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Only show featured reviews */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Only show featured reviews</Heading>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <Stack vertical>
                        <RadioButton
                            label="Yes"
                            checked={valueShowReview === 'yes'}
                            id="yes"
                            name="yes"
                            onChange={handleChangeShowReview}
                        />
                        <RadioButton
                            label="No"
                            id="no"
                            name="no"
                            checked={valueShowReview === 'no'}
                            onChange={handleChangeShowReview}
                        />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Email Settings */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Email Settings</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>Choose if you want to receive email notifications for each review.</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                        <Checkbox label="Send me an email when a review is submitted." name="checkEmail" checked={checkedEmail} onChange={handleChangeEmail} disabled={false} />
                        {
                            checkedEmail === true ? 
                            <>
                                <div style={{marginTop:"5px"}}>
                                    <TextField label="Email address:" value={valueEmail} onChange={handleChangetextEmail} />
                                </div>
                            </>
                            : ""
                        }
                    </Card>
                    <Card sectioned>
                        <p>Send customer a confirmation mail</p>
                        <Stack>
                            <RadioButton
                                label="Yes"
                                checked={valueRadioSendMail === 'sendmailyes'}
                                id="sendmailyes"
                                name="sendmailyes"
                                onChange={handleChangeRadioSendMail}
                            />
                            <RadioButton
                                label="No"
                                id="sendmailno"
                                name="sendmailno"
                                checked={valueRadioSendMail === 'sendmailno'}
                                onChange={handleChangeRadioSendMail}
                            />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Reviews per page */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Reviews per page</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>(Value between 2 and 50)</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <div style={{width:"100px"}}>
                        <TextField label="" type="number" name="ReviewPerPage" min="2" max="50" value={valueReviewPerPage} onChange={handleChangeReviewPerPage} />
                    </div>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}
            
            {/* Maximum characters in reviews */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Maximum characters in reviews</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>(Value between 100 and 2000)</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <div style={{width:"100px"}}>
                        <TextField label="" type="number" name="CharactersInReview" min="100" max="2000" value={valueCharactersInReview} onChange={handleChangeCharactersInReview} />
                    </div>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Maximum images can be uploaded in reviews */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Maximum images can be uploaded in reviews</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>(Value between 1 and 10)</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <div style={{width:"100px"}}>
                        <TextField label="" type="number" name="MaxImages" min="1" max="10" value={valueMaxImages} onChange={handleChangeMaxImages} />
                    </div>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Review listing text */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Review listing text</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>Customize the text for the area that reviews are displayed on your website.</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Reviews's list headline text" name="ReviewListText" value={valueReviewListText} onChange={handleChangeReviewListText} />
                        <p style={{marginTop:"5px",color:"#666",fontStyle:"italic"}}>
                            Special character "%s" will be replace with product's title, remove if you don't want it.
                        </p>
                        </div>
                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Average review" name="AverageReview" value={valueAverageReview} onChange={handleChangeAverageReview} />
                        </div>
                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Agree text" name="AgreeText" value={valueAgreeText} onChange={handleChangeAgreeText} />
                        </div>
                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Decline text" name="DeclineText" value={valueDeclineText} onChange={handleChangeDeclineText} />
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Review form text */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Review form text</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>Customize the text, and which fields are shown for the new review form.</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Author's name" name="AuthorName" value={valueAuthorName} onChange={handleChangeAuthorName} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Author's name field placeholder" name="AuthorNamePlaceholder" value={valueAuthorNamePlaceholder} onChange={handleChangeAuthorNamePlaceholder} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Author's email" name="AuthorEmail" value={valueAuthorEmail} onChange={handleChangeAuthorEmail} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Author's email field placeholder" name="AuthorEmailPlaceholder" value={valueAuthorEmailPlaceholder} onChange={handleChangeAuthorEmailPlaceholder} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Review's title" name="ReviewTitle" value={valueReviewTitle} onChange={handleChangeReviewTitle} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Review's title field placeholder" name="ReviewTitlePlaceholder" value={valueReviewTitlePlaceholder} onChange={handleChangeReviewTitlePlaceholder} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Review's message" name="ReviewMessage" value={valueReviewMessage} onChange={handleChangeReviewMessage} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Review's message field placeholder" name="ReviewMessagePlaceholder" value={valueReviewMessagePlaceholder} onChange={handleChangeReviewMessagePlaceholder} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Review form button" name="ReviewButton" value={valueReviewButton} onChange={handleChangeReviewButton} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Review form submit button" name="ReviewSubmitButton" value={valueReviewSubmitButton} onChange={handleChangeReviewSubmitButton} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Success message" name="SuccessMessage" value={valueSuccessMessage} onChange={handleChangeSuccessMessage} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Error message" name="ErrorMessage" value={valueErrorMessage} onChange={handleChangeErrorMessage} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Rating field label" name="RatingField" value={valueRatingField} onChange={handleChangeRatingField} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Recommend field label" name="RecommendField" value={valueRecommendField} onChange={handleChangeRecommendField} />
                        </div>

                        <div style={{marginBottom:"15px"}}>
                        <TextField label="Upload image button" name="UploadImageButton" value={valueUploadImageButton} onChange={handleChangeUploadImageButton} />
                        </div>

                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Show "Verified Purchase" text */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Show "Verified Purchase" text</Heading>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <Stack vertical>
                        <RadioButton
                            label="Yes"
                            checked={valueVerifiedPurchase === 'yesVerifiedPurchase'}
                            id="yesVerifiedPurchase"
                            name="yesVerifiedPurchase"
                            onChange={handleChangeVerifiedPurchase}
                        />
                        <RadioButton
                            label="No"
                            id="noVerifiedPurchase"
                            name="noVerifiedPurchase"
                            checked={valueVerifiedPurchase === 'noVerifiedPurchase'}
                            onChange={handleChangeVerifiedPurchase}
                        />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Show Recommend Customer text */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Show Recommend Customer text</Heading>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                    <Stack vertical>
                        <RadioButton
                            label="Yes"
                            checked={valueRecommendCustomerText === 'yesRecommendCustomerText'}
                            id="yesRecommendCustomerText"
                            name="yesRecommendCustomerText"
                            onChange={handleChangeRecommendCustomerText}
                        />
                        <RadioButton
                            label="No"
                            id="noRecommendCustomerText"
                            name="noRecommendCustomerText"
                            checked={valueRecommendCustomerText === 'noRecommendCustomerText'}
                            onChange={handleChangeRecommendCustomerText}
                        />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Asking customer for a review */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Asking customer for a review</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>When your customers login, they will see notification to ask them for a review with bought products.</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                        <p>Show notification to paid customers to asking for a review</p>
                        <Stack>
                            <RadioButton
                                label="Yes"
                                checked={valueAskingCustomter === 'yesAskingCustomter'}
                                id="yesAskingCustomter"
                                name="yesAskingCustomter"
                                onChange={handleChangeAskingCustomter}
                            />
                            <RadioButton
                                label="No"
                                id="noAskingCustomter"
                                name="noAskingCustomter"
                                checked={valueAskingCustomter === 'noAskingCustomter'}
                                onChange={handleChangeAskingCustomter}
                            />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Featured reviews box badge */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Featured reviews box badge</Heading>
                    <p style={{marginTop:"3px",color:"#666",fontStyle:"italic"}}>Will appear featured reviews box badge on all your store pages.</p>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                        <p>Show box badge</p>
                        <Stack>
                            <RadioButton
                                label="Yes"
                                checked={valueFeaturedReviews === 'yesFeaturedReviews'}
                                id="yesFeaturedReviews"
                                name="yesFeaturedReviews"
                                onChange={handleChangeFeaturedReviews}
                            />
                            <RadioButton
                                label="No"
                                id="noFeaturedReviews"
                                name="noFeaturedReviews"
                                checked={valueFeaturedReviews === 'noFeaturedReviews'}
                                onChange={handleChangeFeaturedReviews}
                            />
                        </Stack>
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* Custom CSS */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section secondary>
                    <Heading>Custom CSS</Heading>
                </Layout.Section>

                <Layout.Section>
                    <Card sectioned>
                        <TextField label="" value={valueCustomCss} onChange={handleChangeCustomCss} multiline={4} />
                    </Card>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

            {/* button */}
            <div style={{borderBottom:"1px solid #ECECEC",paddingBottom:"15px",marginBottom:"15px"}}>
            <Layout>
                <Layout.Section>
                    <div>
                        <Button primary>Save</Button>
                    </div>
                </Layout.Section>
            </Layout>
            </div>
            {/*  */}

        </Page>
    );
}

export default SettingGeneral;
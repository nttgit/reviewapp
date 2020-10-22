import React, {useCallback, useState} from 'react';
import {Card, Layout, Heading, Page} from '@shopify/polaris';

const Instructions = () => {
    return (
        <div>
            <Page>
            <Card sectioned>
                <Layout>
                    <Layout.Section>
                        <Heading>Quick Guide</Heading>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section secondary>
                        <img src="https://apps.omegatheme.com/customer-reviews/admin/images/guide5.jpg" />
                    </Layout.Section>

                    <Layout.Section>
                        <p style={{fontWeight:"bold"}}>1. Add reviews to your product pages</p>
                        <p>- Here’re details that guide you how to add the code snippet to display rating star in the product page</p>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section secondary>
                        <img src="https://apps.omegatheme.com/customer-reviews/admin/images/guide6.jpg" />
                    </Layout.Section>

                    <Layout.Section>
                        <p style={{fontWeight:"bold"}}>2. Optionally add the star ratings badge to your collection pages</p>
                        <p>- Here’re details that guide you how to add the code snippet to display star ratings badge to your collection pages</p>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section secondary>
                        <img src="https://apps.omegatheme.com/customer-reviews/admin/images/import4.jpg" style={{width:"95%"}} />
                    </Layout.Section>

                    <Layout.Section>
                        <p style={{fontWeight:"bold"}}>3. Import reviews via Amazon.com or Aliexpress.com</p>
                        <p>- Here’re details that guide you how to Import reviews via Amazon.com or Aliexpress.com</p>
                    </Layout.Section>
                </Layout>
            </Card>
            </Page>
        </div>
    );
}

export default Instructions;
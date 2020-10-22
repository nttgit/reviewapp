import React, {useCallback, useState} from 'react';
import {Layout, Stack, RadioButton, Select, Heading, TextField, Button} from '@shopify/polaris';
import InputColor from 'react-input-color';
import ReactStars from "react-rating-stars-component";

function SelectLayout() {
    const [selected, setSelected] = useState('overstock');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const options = [
    {label: 'Over stock', value: 'overstock'},
    {label: 'Collateral', value: 'collateral'},
    {label: 'Masonry', value: 'masonry'},
    ];

    return (
    <Select
        label=""
        options={options}
        onChange={handleSelectChange}
        value={selected}
    />
    );
}

function RadioButtonExample() {
    const [value, setValue] = useState('orange');

    const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
    );

    const RadioStar = (Props) => {
        return (
            <>
                <img src={Props.img} />
                <span style={{position:'relative',bottom:'0px',fontSize:'16px',marginLeft:'5px'}}>{Props.label}</span>
            </>
        );
    }

    const listRadio = [
        {
            label: 'Orange',
            id: 'orange',
            name: 'orange',
            img: 'https://apps.omegatheme.com/customer-reviews/assets/images/star_style/stars-orange.png'
        },
        {
            label: 'Red',
            id: 'red',
            name: 'red',
            img: 'https://apps.omegatheme.com/customer-reviews/assets/images/star_style/stars-red.png'
        },
        {
            label: 'Green',
            id: 'green',
            name: 'green',
            img: 'https://apps.omegatheme.com/customer-reviews/assets/images/star_style/stars-green.png'
        },
        {
            label: 'Blue',
            id: 'blue',
            name: 'blue',
            img: 'https://apps.omegatheme.com/customer-reviews/assets/images/star_style/stars-blue.png'
        },
        {
            label: 'Purple',
            id: 'purple',
            name: 'purple',
            img: 'https://apps.omegatheme.com/customer-reviews/assets/images/star_style/stars-purple.png'
        },
    ];

    return (
    <Stack>
        {listRadio.map((item, index) =>
            <RadioButton key={index}
            label={<RadioStar img={item.img} label={item.label} />}
            checked={value === item.id}
            id={item.id}
            name={item.name}
            onChange={handleChange}
        />
        )}
    </Stack>
    );
}

function ColorchangeHandler(colors) {
    console.log(colors);
}

function ChooseColor(){
    const [colorButtonBackground, setColorButtonBackground] = React.useState({});
    const [colorButtontext, setColorButtontext] = React.useState({});
    const [colorReview, setColorReview] = React.useState({});

    return (
        <div>
            <Heading>Button background color</Heading>
            <InputColor
                initialValue="#5e72e4"
                onChange={setColorButtonBackground}
                placement="right"
            />

            <Heading>Button text color</Heading>
            <InputColor
                initialValue="#5e72e4"
                onChange={setColorButtontext}
                placement="right"
            />

            <Heading>Review statistic bar color</Heading>
            <InputColor
                initialValue="#5e72e4"
                onChange={setColorReview}
                placement="right"
            />
        </div>
    );
}

const SettingLayout = () => {
    return (
        <div>
            <Layout>
                <Layout.Section oneHalf>
                    <div style={{border:"1px solid #ECECEC",padding:"10px"}}>
                        <div style={{width:"50%"}}>
                        <Heading>Choose rating star's style</Heading>
                        <SelectLayout />
                        </div>
                        <div style={{marginTop:"15px"}}>
                            <Heading>Choose rating star's style</Heading>
                            <RadioButtonExample />
                        </div>
                        <div style={{marginTop:"15px"}}>
                            <ChooseColor />
                        </div>
                        <div style={{marginTop:"15px"}}>
                            <Button primary>Save</Button>
                        </div>
                    </div>
                </Layout.Section>

                <Layout.Section oneHalf>
                    <div style={{border:"1px solid #ECECEC",padding:"10px",backgroundColor:"rgb(245, 245, 245)"}}>
                        <p style={{fontWeight:"bold"}}>Attention! This is a preview only. The visuals might differ after applying settings due to extra styling rules that your Theme might have or the available space.</p>
                    </div>
                    
                    <div style={{border:"1px solid #ECECEC",padding:"10px",marginTop:"20px"}}>
                        <Layout>
                            <Layout.Section>
                            <p style={{fontSize:"18px"}}>CUSTOMER REVIEWS</p>
                            </Layout.Section>

                            <Layout.Section secondary>
                            <div style={{textAlign: 'right'}}>
                            <Button primary>Write a review</Button>
                            </div>
                            </Layout.Section>
                        </Layout>
                        <Layout>
                            <Layout.Section>
                                <div style={{marginTop:"15px",borderBottom:"1px solid #ccc",paddingBottom:"15px"}}>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        value={3}
                                        edit={false}
                                    />
                                    <p>Lorem Ipsum Dolor Sit Amet By Lorem Ipsum <span style={{color:"#22b345"}}>| Verified Purchase</span></p>
                                    <p>
                                        <img src="https://apps.omegatheme.com/customer-reviews/assets/images/recommend.png"></img>
                                        <span style={{color:"#22b345"}}> I recommend this!</span>
                                        <p>- 1 day ago -</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fringilla turpis at tempor. Maecenas ipsum nisi, semper nec urna et, tristique placerat ex. Vestibulum ultricies mauris elit, non maximus erat vehicula et.</p>
                                        <p>20 customers thought this review helpful!</p>
                                    </p>
                                </div>
                                <div style={{marginTop:"15px"}}>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        value={3}
                                        edit={false}
                                    />
                                    <p>Lorem Ipsum Dolor Sit Amet By Lorem Ipsum <span style={{color:"#c45500"}}>| Verified Purchase</span></p>
                                    <p>
                                        <img src="https://apps.omegatheme.com/customer-reviews/assets/images/no-recommend.png"></img>
                                        <span style={{color:"#22b345"}}> I recommend this!</span>
                                        <p>- 1 day ago -</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fringilla turpis at tempor. Maecenas ipsum nisi, semper nec urna et, tristique placerat ex. Vestibulum ultricies mauris elit, non maximus erat vehicula et.</p>
                                        <p>10 customers thought this review helpful!</p>
                                    </p>
                                </div>
                            </Layout.Section>
                        </Layout>
                    </div>
                </Layout.Section>
            </Layout>
        </div>
    );
}

export default SettingLayout;
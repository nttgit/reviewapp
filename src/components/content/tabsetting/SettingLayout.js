import React, {useCallback, useState} from 'react';
import {Layout, Stack, RadioButton, Select, Heading, TextField} from '@shopify/polaris';
import InputColor from 'react-input-color';

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
                <span style={{position:'relative',bottom:'6px',fontSize:'16px',marginLeft:'5px'}}>{Props.label}</span>
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
    const [color, setColor] = React.useState({});

    return (
        <div>
            <InputColor
                initialValue="#5e72e4"
                onChange={setColor}
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
                    </div>
                </Layout.Section>

                <Layout.Section oneHalf>
                    <div style={{border:"1px solid #ECECEC",padding:"10px"}}>

                    </div>
                </Layout.Section>
            </Layout>
        </div>
    );
}

export default SettingLayout;
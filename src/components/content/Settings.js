import React, {useCallback, useState} from 'react';
import {Card, Tabs} from '@shopify/polaris';
import SettingLayout from './tabsetting/SettingLayout';
import SettingGeneral from './tabsetting/SettingGeneral';

const Settings = () => {

    const [selected, setSelected] = useState(1);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'layout',
            content: 'Layout',
            component: <SettingLayout />
        },
        {
            id: 'general',
            content: 'General',
            component: <SettingGeneral />
        },
    ];

    return (
        <div>
            <Card sectioned>
                <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                    <Card.Section>
                    {tabs[selected].component}
                    </Card.Section>
                </Tabs>
            </Card>
        </div>
    );
}

export default Settings;
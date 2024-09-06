import React, {useState} from 'react';
import { Tabs, Tab } from '@mui/material';

const TabSwitcher = ({ onSelectTab, activeTab, disabledTabs = [] }) => {
    const handleChange = (event, newValue) => {
        onSelectTab(newValue);
    };

    const tabs = ['JP', 'VN', 'EN'];

    return (
        <Tabs 
            value={activeTab} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            style={{ marginBottom: "24px" }}
            sx={{
                '& .MuiTab-root': {
                    backgroundColor: '#EAF4FF',
                    borderRadius: "8px !important",
                    marginLeft: "8px",
                    height: "35px",
                    color: "#07407B"
                },
                '& .Mui-selected': {
                    backgroundColor: '#07407B',
                    color: "#FFF !important"
                },
                '& .MuiTabs-indicator': {
                    display: "none"
                }
            }}>
            {tabs.map((tab, index) => (
                <Tab key={index} label={tab} value={index} disabled={disabledTabs.includes(tab)}/>
            ))}
        </Tabs>
    );
};

export default TabSwitcher;
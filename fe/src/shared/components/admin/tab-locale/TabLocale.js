import React, { useEffect } from 'react';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';

const TabLocale = ({ onClick, defaultTab, disabledTabs = [] , listLocale = ["JP", "EN", "VN"]}) => {
    const [value, setValue] = React.useState(defaultTab);

    useEffect(() => {
        setValue(defaultTab);
        onClick(defaultTab);
    }, [defaultTab]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onClick(newValue);
    };
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            style={{ marginBottom: "24px" }}
            sx={{
                '& .MuiTab-root': {
                    backgroundColor: '#EAF4FF',
                    borderRadius: "8px !important",
                 
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
            }}
        >
           {listLocale.map((tabValue, index) => (
        <Tab
            key={tabValue}
            label={tabValue}
            value={tabValue}
            disabled={disabledTabs.includes(tabValue)}
            sx={{ marginLeft: index === 0 ? "0" : "8px" }}
        />
    ))}
        </Tabs >
    );
};

TabLocale.defaultProps = {
    onClick: () => { },
};

export default TabLocale;

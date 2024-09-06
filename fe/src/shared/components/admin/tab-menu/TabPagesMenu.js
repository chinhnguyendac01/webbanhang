import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Pages from 'utils/Page';
import { useTranslation } from 'react-i18next';
const TabPagesMenu = ({ onClick, defaultTab }) => {
    const [value, setValue] = React.useState(defaultTab);
    const { t } = useTranslation();
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
            style={{
                marginBottom: "24px",
                position: "relative",
                overflow: "visible"
            }}
            sx={{

                '& .MuiTab-root': {
                    backgroundColor: '#EAF4FF',
                    borderRadius: "8px !important",
                    marginLeft: "8px",
                    height: "35px",
                    color: "#07407B",
                },
                '& .MuiTab-root:first-of-type': {
                    marginLeft: "0px",
                },
                '& .Mui-selected': {
                    backgroundColor: '#07407B',
                    color: "#FFF !important"
                },
                '& .MuiTabs-indicator': {
                    display: "none"
                },
                '& .MuiTabScrollButton-horizontal': {
                    height: "100%",
                    position: "absolute",
                    right: "-45px"
                },
                '& .MuiTabScrollButton-horizontal:first-of-type': {
                    left: "-45px"
                },
            }}
        >
            <Tab label={t(`admin.pages.${Pages.top}`)} value={Pages.top} />
            <Tab label={t(`admin.pages.${Pages.company}`)} value={Pages.company} />
            <Tab label={t(`admin.pages.${Pages.business}`)} value={Pages.business} />
            <Tab label={t(`admin.pages.${Pages.recruitment}`)} value={Pages.recruitment} />
            <Tab label={t(`admin.pages.${Pages.contact}`)} value={Pages.contact} />
            <Tab label={t(`admin.pages.${Pages.lab}`)} value={Pages.lab} />
            <Tab label={t(`admin.pages.${Pages.contract}`)} value={Pages.contract} />
            <Tab label={t(`admin.pages.${Pages.qna}`)} value={Pages.qna} />
            <Tab label={t(`admin.pages.${Pages.holon}`)} value={Pages.holon} />
        </Tabs >
    );
};

TabPagesMenu.defaultProps = {
    onClick: () => { },
};

export default TabPagesMenu;

import React, { useEffect } from 'react';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import Pages from 'utils/Page';
import { useTranslation } from 'react-i18next';
const ModelTabs = ({ onClick, defaultTab }) => {
    const [value, setValue] = React.useState(defaultTab);
    const { t, i18n } = useTranslation();
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
            }}
        >
            <Tab
                sx={{ marginLeft: "0px !important" }}
                label={t("business-tabs.contract")}
                 value={Pages.contract} />
            <Tab label={t("business-tabs.lab")} value={Pages.lab} />
            <Tab label={t("business-tabs.holon")} value={Pages?.holon} />
        </Tabs >
    );
};

ModelTabs.defaultProps = {
    onClick: () => { },
};

export default ModelTabs;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FilterTable.module.scss';
import IcFilter from 'shared/components/icons/IcFilter';
import useOnClickOutside from 'hooks/use-onclick-outside';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
const FilterTable = ({
    selectedOption,
    onOptionSelect,
    options,
    defaultValue,
    size
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    useOnClickOutside(dropdownRef, () => {
        setIsOpen(false);
    });

    const dropdownVariants = {
        hidden: { opacity: 0, scale: 0.9, translateY: -10 },
        visible: { opacity: 1, scale: 1, translateY: 0 },
    };
    const dataObjectSelected = options?.find(item => item?.id === selectedOption);
    const styleData = {
        minWidth :size
    }
    return (
        <div className={styles['Frame-table']} onClick={toggleDropdown} ref={dropdownRef}>
            <div className={styles['Icon-list']}>
                <IcFilter />
            </div>
            <div className={styles['Title-data']}>{dataObjectSelected?.library_name || defaultValue}</div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles['List-data']}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <motion.label  className={styles['data']} onClick={() => handleOptionSelect("")}>{t("common.all")}</motion.label>
                            {options?.map((option) => (
                                <motion.label style={styleData} className={styles['data']} value={option?.id}
                                    key={option?.id}
                                    onClick={() => handleOptionSelect(option?.id)}>  {option?.library_name}</motion.label>
                            ))}

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FilterTable;

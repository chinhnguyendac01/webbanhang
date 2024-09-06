import React, { useState } from 'react';
import styles from './DropDown.module.scss';
import IcDropdown from 'shared/components/icons/IcDropdown';
import IcChevronDown from 'shared/components/icons/IcChevronDown';
import useOnClickOutside from 'hooks/use-onclick-outside';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
export default function DropDown({
    selectedOption,
    onOptionSelect,
    options,
    defaultValue,
}) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
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
    const dataObjectSelected = options?.find(item => item?.id === selectedOption)

    return (
        <>
            <div className={`${styles['style_selectBox']}`} ref={dropdownRef}>
                <div
                    onClick={toggleDropdown}
                    className={` ${styles['style_select']}`}
                    ref={dropdownRef}
                >
                    <label
                        className={`${styles['style_select_frame']} ${isOpen ? styles['label_active'] : ''
                            }`}
                    >
                        <span>{dataObjectSelected?.library_name || defaultValue}</span>
                    </label>
                    <div className={styles['Icon_dropdown']}>
                        {isOpen ? <IcChevronDown /> : <IcDropdown />}
                    </div>
                </div>
                <div
                    className={`${styles['style_check_job']} ${isOpen ? styles['expanded'] : ''
                        }`}
                >
                    <label value="" onClick={() => handleOptionSelect("")}>
                        {t("career.All")}
                    </label>

                    {options?.map((option) => (
                        <label
                            value={option?.id}
                            key={option?.id}
                            onClick={() => handleOptionSelect(option?.id)}
                        >
                            {option?.library_name}
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
}

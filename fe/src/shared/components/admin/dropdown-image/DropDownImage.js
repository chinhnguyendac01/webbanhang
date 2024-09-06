import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DropDownImage.module.scss';
import IcFilter from 'shared/components/icons/IcFilter';
import useOnClickOutside from 'hooks/use-onclick-outside';
import { useRef } from 'react';

const DropDownImage = ({
  selectedOption,
  onOptionSelect,
  options,
  defaultValue,
  editMode = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (editMode) {
      setIsOpen(!isOpen);
    }

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
  const dataObjectSelected = options?.find(item => item?.id === selectedOption)

  return (
    <div className={styles['Frame-table']} onClick={toggleDropdown} ref={dropdownRef}>
      <div className={styles['Icon-list']}>
        <IcFilter />
      </div>
      <div className={styles['Title-data']}> {<div className={styles["frame-image"]}><img className={styles["image"]} src={`${process.env.REACT_APP_STORAGE_URL}${dataObjectSelected?.image}`} alt={dataObjectSelected?.library_name} /> </div> || defaultValue}  </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles['List-data']}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div>
              <motion.label className={styles['data']} onClick={() => handleOptionSelect("")}>No choice</motion.label>
              {options?.map((option) => (
                <motion.label className={styles['data']} value={option?.id}
                  key={option?.id}
                  onClick={() => handleOptionSelect(option?.id)}> <span>
                    {option?.library_name}
                  </span>
                  <img src={`${process.env.REACT_APP_STORAGE_URL}${option?.image}`} alt={option?.library_name} />

                </motion.label>
              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownImage;

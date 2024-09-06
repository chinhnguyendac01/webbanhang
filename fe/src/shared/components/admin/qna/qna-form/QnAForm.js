import React, { useState } from 'react';
import Input from '../../common/input/Input';
import ButtonPlus from '../../common/button-plus/ButtonPlus';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss'
const QnAForm = () => {
    const { t } = useTranslation();
    const [qnaPairs, setQnaPairs] = useState([{ question: '', answer: '' }]);
    const handleAddPair = () => {
        setQnaPairs([...qnaPairs, { question: '', answer: '' }]);
    };

    const handleInputChange = (index, type, value) => {
        const updatedPairs = [...qnaPairs];
        updatedPairs[index][type] = value;
        setQnaPairs(updatedPairs);
    };

    return (
        <div>
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <label>
                        {t("admin.qna_list.group_id")}
                    </label>
                    {/* <ButtonPlus onClick={() => { }} /> */}
                </div>
                <input className='custom_input'></input>
            </div>

            <div>
                <div className={styles["input-group"]}>
                    {t("admin.qna_list.qna")}
                </div>
                {qnaPairs.map((pair, index) => (
                    <div key={index}>
                        <div className={styles["input-group"]}>
                            <label> {t("admin.qna_list.question")}</label>
                            <input
                                className='custom_input'
                                value={pair.question}
                                onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                            />
                        </div>
                        <div className={styles["input-group"]}>
                            <label> {t("admin.qna_list.answer")}</label>
                            <input
                                className='custom_input'
                                value={pair.answer}
                                onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ margin: "32px auto" }} className='d-flex justify-content-center'>
                <ButtonPlus onClick={handleAddPair} isOrage={true} />
            </div>
        </div>
    );
};

export default QnAForm;

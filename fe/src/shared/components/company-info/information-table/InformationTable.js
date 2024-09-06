import React, { useEffect } from 'react';
import classnames from 'classnames';
import styles from './InformationTable.module.scss';
import { useTranslation } from 'react-i18next';

function InformationTable({ props }) {
    const { t } = useTranslation();

    const getRowClass = (index) => {
        return classnames({
            [styles['even-row']]: index % 2 === 0,
            [styles['odd-row']]: index % 2 !== 0,
        });
    };

    const autoExpand = (element) => {
        element.style.height = '20px';
        element.style.height = (element.scrollHeight) + 'px';
    };

    useEffect(() => {
        // Auto-expand textarea on initial render
        const textareas = document.querySelectorAll(`.${styles['content-column']} textarea`);
        textareas.forEach(autoExpand);
    }, [props?.content]);

    return (
        <div className={styles['InformationTable']}>
            <div className={styles['topic']}>{props?.title}</div>
            <table>
                <tbody>
                    {Array.isArray(props?.content) && props?.content?.map((item, idx) => (
                        <tr key={idx} className={getRowClass(idx + 1)} >
                            <th className={styles['title-column']}>{item?.label}</th>
                            <td className={styles['content-column']}>
                                <textarea
                                    wrap='none'
                                    type="text"
                                    style={{
                                        overflowY: 'hidden',
                                        resize: "none"
                                    }}
                                    value={item?.value || ''}
                                    readOnly={true}
                                // onInput={(e) => autoExpand(e.target)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

InformationTable.defaultProps = {};

export default InformationTable;

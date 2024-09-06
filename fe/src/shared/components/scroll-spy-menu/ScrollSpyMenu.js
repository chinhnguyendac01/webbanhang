import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-scroll';
import Scrollspy from 'react-scrollspy';
import ScrollLink from 'react-scroll';
const ScrollSpyMenu = ({ props, sectionType, defaultSection = "" }) => {
    // const [activeSection, setActiveSection] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [sectionArr, setSectionArr] = useState([])
    useEffect(() => {
        if (Array.isArray(props?.sections)) {
            // const sectionIds = sections.map(section => section.id);
            setSectionArr(props.sections.map(section => section.id))
        }
    }, [props])
    useEffect(() => {
        const headerOffset = 80;
        if (defaultSection && sectionArr.includes(defaultSection)) {
            const element = document.getElementById(defaultSection);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                // element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest", offsetTop: -160 });
                setSelectedSection(defaultSection);
            }
        }
    }, [defaultSection, sectionArr]);
    return (
        <Scrollspy
            className={`scrollspy ${styles['menu-wrapper']}`}
            items={sectionArr}
            currentClassName={styles['item-active']}
            offset={-80}
        >
            {props?.sections?.map((section, index) => (
                <li key={index}
                >
                    <Link
                        key={index}
                        className={styles['item']}
                        to={`${section?.id}`}
                        spy={section.id}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        activeClass={styles['active']}
                    >
                        {section?.label}
                    </Link>
                </li>
            ))
            }
        </Scrollspy >
    );
};

ScrollSpyMenu.defaultProps = {
    props: {
        sections: []
    },
    sectionType: "section"
};

export default ScrollSpyMenu;   
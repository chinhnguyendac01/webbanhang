import React from 'react'
import styles from './ChangeLangue.module.scss'
export default function ChangeLangue(props) {
     const { selectedLanguage, toggleDropdown, isDropdownOpen, remainingLanguages, handleLanguageChange, languageData } = props
     return (
          <div><div className={styles['Frame_header_right']}>
               <div className={styles['Header_buttonLanguage']}>
                    <div className={styles['Button_choose']}>

                         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                              {languageData.map((language) => (
                                   <button
                                        key={language.id}
                                        className={`${styles['Btn-lang']} ${selectedLanguage.id === language.id ? styles['selected'] : ''}`}
                                        onClick={() => handleLanguageChange(language.id)}
                                   >
                                        {language.icon}
                                   </button>
                              ))}
                         </div>
                         {/* <button
                              type="button"
                              className={`${styles['Btn_language']}`}
                              onClick={toggleDropdown}
                         >
                              {selectedLanguage?.icon}
                              <span className={styles['Text_language']}>
                                   {selectedLanguage?.acronym}
                              </span>
                         </button>

                         {isDropdownOpen && (
                              <>
                                   <div className={styles['menu-languages']}>
                                        {remainingLanguages?.map((language, index) => (
                                             <button
                                                  key={index}
                                                  type="button"
                                                  className={
                                                       styles[
                                                       'Btn_language_choose'
                                                       ]
                                                  }
                                                  onClick={() =>
                                                       handleLanguageChange(
                                                            language?.id,
                                                       )
                                                  }
                                             >

                                                  {language?.icon}
                                                  <span
                                                       className={
                                                            styles['Text_language']
                                                       }
                                                  >
                                                       {language?.acronym}
                                                  </span>
                                             </button>
                                        ))}
                                   </div>

                                   <div
                                        className={styles['Header_overlay']}
                                        onClick={() => toggleDropdown()
                                        }
                                   ></div>
                              </>
                         )} */}
                    </div>
               </div>

          </div></div>
     )
}

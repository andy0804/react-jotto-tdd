import React from 'react'
import propTypes from 'prop-types'
const LanguagePicker = ({setLanguage}) => {
    const languages = [
        { code: 'en', symbol: '🇺🇸' },
        { code: 'emoji', symbol: '😊' },
      ];

     const languageIcon = languages.map(lang=>
        <span className='langStyle' onClick={()=> setLanguage(lang.code)} data-test="lang-button" key={lang.code}>{lang.symbol}</span>) 
    return (
        <div data-test='component-language-picker'>
         <span> Change Language:</span>  {languageIcon}
        </div>
    )
}
LanguagePicker.propTypes ={
    setLanguage: propTypes.func.isRequired
}
export default LanguagePicker

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useContext(LanguageContext); // language, toggleLanguage და t (translations) კონტექსტიდან

  return (
    <div className="language-switcher">
      <span>{t.language}: <span className="current-setting">{language === 'ka' ? t.georgian : t.english}</span></span>
      <button onClick={toggleLanguage}>
        {language === 'ka' ? t.english : t.georgian}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
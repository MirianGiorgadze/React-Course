import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme, t } = useContext(ThemeContext); // theme, toggleTheme და t (translations) კონტექსტიდან

  return (
    <div className="theme-switcher">
      <span>{t.theme}: <span className="current-setting">{theme === 'light' ? t.light : t.dark}</span></span>
      <button onClick={toggleTheme}>
        {theme === 'light' ? t.dark : t.light} {t.theme}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
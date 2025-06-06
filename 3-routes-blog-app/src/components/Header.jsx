import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ThemeSwitcher from './ThemeSwitcher'; // იმპორტი Header-ში
import LanguageSwitcher from './LanguageSwitcher'; // იმპორტი Header-ში
import FocusInput from './FocusInput'; // იმპორტი Header-ში

function Header() {
  const { t } = useContext(LanguageContext);

  return (
    <nav className="header-nav">
      <div className="container header-content"> {/* დამატებულია header-content კლასი */}
        <Link to="/" className="brand-link">{t.blogTitle}</Link>
        <div className="header-controls-and-nav"> {/* ახალი div ნავიგაციისა და გადამრთველებისთვის */}
          <ul className="main-nav-links"> {/* არსებული ნავიგაცია */}
            <li>
              <Link to="/">{t.home}</Link>
            </li>
            <li>
              <Link to="/posts">{t.latestPosts}</Link>
            </li>
            <li>
              <Link to="/about">{t.aboutUs}</Link>
            </li>
          </ul>
          <div className="header-feature-items"> {/* ახალი div გადამრთველებისა და FocusInput-ისთვის */}
            <ThemeSwitcher />
            <LanguageSwitcher />
            <FocusInput />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Header() {
  const { t } = useContext(LanguageContext);

  return (
    <nav className="header-nav">
      <div className="container">
        {/* ბრენდის ლინკი იყენებს blogTitle-ს, რომელიც App.jsx-შია განსაზღვრული */}
        <Link to="/" className="brand-link">{t.blogTitle}</Link>
        <ul>
          <li>
            {/* მთავარი გვერდის ლინკი იყენებს home გასაღებს */}
            <Link to="/">{t.home}</Link>
          </li>
          <li>
            <Link to="/posts">{t.latestPosts}</Link>
          </li>
          <li>
            <Link to="/about">{t.aboutUs}</Link>
          </li>
          {/* შესვლის ლინკი ამოღებულია ამ ვერსიიდან */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

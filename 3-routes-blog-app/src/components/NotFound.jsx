import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function NotFound() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="not-found-page card-container">
      <h1>404</h1>
      <h2>{t.notFoundTitle}</h2>
      <p>{t.notFoundMessage}</p>
      <Link to="/" className="back-link">
        {t.backToHome}
      </Link>
    </div>
  );
}

export default NotFound;
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  const { t } = useContext(LanguageContext);

  useDocumentTitle(t.home);

  return (
    <div className="home-page card-container">
      <h1>{t.welcome}</h1>
      <p>{t.explore}</p>
    </div>
  );
}

export default Home;
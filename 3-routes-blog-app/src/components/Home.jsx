import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Home() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="home-page card-container">
      <h1>{t.welcome}</h1>
      <p>{t.explore}</p>
    </div>
  );
}

export default Home;
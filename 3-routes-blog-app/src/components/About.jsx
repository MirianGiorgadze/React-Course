import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function About() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="about-page card-container">
      <h1>{t.aboutUs}</h1>
      <p>{t.aboutText}</p>
      <p>{t.enjoy}</p>
    </div>
  );
}

export default About;
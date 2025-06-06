import { createContext } from 'react';

// ვქმნით LanguageContext-ს, ნაგულისხმევი მნიშვნელობით
export const LanguageContext = createContext({
  language: 'ka', // ნაგულისხმევი ენა
  toggleLanguage: () => {}, // ნაგულისხმევი ცარიელი ფუნქცია
  t: {} // ნაგულისხმევი ცარიელი ობიექტი ლოკალიზაციისთვის
});
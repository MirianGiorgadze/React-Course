import { createContext } from 'react';

// ვქმნით ThemeContext-ს, ნაგულისხმევი მნიშვნელობით
export const ThemeContext = createContext({
  theme: 'light', // ნაგულისხმევი თემა
  toggleTheme: () => {}, // ნაგულისხმევი ცარიელი ფუნქცია
  t: {} // ნაგულისხმევი ცარიელი ობიექტი ლოკალიზაციისთვის
});
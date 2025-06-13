import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Header from './components/Header'; // Header ახლა მოიცავს გადამრთველებს და FocusInput-ს
import PostsLayout from './components/PostsLayout';
import PostDetail from './components/PostDetail';
import PostList from './components/PostList';
import MemoCounter from './components/MemoCounter';
import ContactForm from './components/ContactForm';

// ThemeSwitcher, LanguageSwitcher, FocusInput აღარ იმპორტირდება აქ, რადგან ისინი Header-ში გადავიდნენ
// import ThemeSwitcher from './components/ThemeSwitcher';
// import LanguageSwitcher from './components/LanguageSwitcher';
// import FocusInput from './components/FocusInput';

import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ka');

  document.body.className = theme === 'dark' ? 'dark-theme' : '';

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ka' ? 'en' : 'ka'));
  };

  const translations = {
    ka: {
      blogTitle: "ჩემი ბლოგი",
      home: "მთავარი",
      welcome: "კეთილი იყოს თქვენი მობრძანება ჩვენს ბლოგზე!",
      explore: "გამოიკვლიეთ ჩვენი უახლესი სტატიები და სიახლეები.",
      aboutUs: "ჩვენს შესახებ",
      aboutText: "ეს არის მინიმალისტური ბლოგის აპლიკაცია, რომელიც შექმნილია React-ით, Vite-ით და React Router-ით. პროექტის მიზანია დემონსტრაცია გაუკეთოს React Router-ის და useContext-ის შესაძლებლობებს, რათა აპლიკაციის სტრუქტურა იყოს ორგანიზებული, მასშტაბირებადი და მოქნილი.",
      enjoy: "გისურვებთ სასიამოვნო დროის გატარებას!",
      notFoundTitle: "გვერდი ვერ მოიძებნა",
      notFoundMessage: "ბოდიში, მოძებნილი გვერდი არ არსებობს.",
      backToHome: "მთავარ გვერდზე დაბრუნება",
      latestPosts: "ბოლო პოსტები",
      backToList: "უკან პოსტების სიაში",
      categories: "კატეგორიები",
      allPosts: "ყველა პოსტი",
      technology: "ტექნოლოგია",
      programming: "პროგრამირება",
      postNotFound: "პოსტი ვერ მოიძებნა",
      postNotFoundMessage: "ბოდიში, ასეთი პოსტი არ არსებობს.",
      theme: "თემა",
      language: "ენა",
      light: "ნათელი",
      dark: "ბნელი",
      georgian: "ქართული",
      english: "ინგლისური",
      focusInput: "ფოკუსირება ინფუთზე",
      enterText: "ჩაწერეთ ტექსტი...",
      contact: "კონტაქტი"
    },
    en: {
      blogTitle: "My Blog",
      home: "Home",
      welcome: "Welcome to our blog!",
      explore: "Explore our latest articles and news.",
      aboutUs: "About Us",
      aboutText: "This is a minimalist blog application built with React, Vite, and React Router. The project aims to demonstrate the capabilities of React Router, useRef, and useContext, ensuring an organized, scalable, and flexible application structure.",
      enjoy: "We wish you a pleasant time!",
      notFoundTitle: "Page Not Found",
      notFoundMessage: "Sorry, the page you are looking for does not exist.",
      backToHome: "Back to Home",
      latestPosts: "Latest Posts",
      backToList: "Back to Post List",
      categories: "Categories",
      allPosts: "All Posts",
      technology: "Technology",
      programming: "Programming",
      postNotFound: "Post Not Found",
      postNotFoundMessage: "Sorry, such a post does not exist.",
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark",
      georgian: "Georgian",
      english: "English",
      focusInput: "Focus Input",
      enterText: "Enter text...",
      contact: "Contact"
    }
  };

  const t = translations[language];


  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme, t }}>
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
          <div className="App">
            <Header /> {/* Header ახლა მოიცავს გადამრთველებს და FocusInput-ს */}
            <main>
              {/* feature-section ამოღებულია აქედან */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                
                <Route path="/posts" element={<PostsLayout />}>
                  <Route index element={<PostList />} /> 
                  <Route path=":id" element={<PostDetail />} /> 
                </Route>

                <Route path="*" element={<NotFound />} />
                <Route path="/memo" element={<MemoCounter />} />
                <Route path="/contact" element={<ContactForm />} />
              </Routes>
            </main>
          </div>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

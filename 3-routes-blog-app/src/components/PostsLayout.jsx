import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function PostsLayout() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="posts-layout-container">
      {/* აქ შეგიძლიათ დაამატოთ ნავიგაცია ან სხვა ელემენტები, რომლებიც საერთოა /posts-ისთვის */}
      <nav className="sidebar">
        <h2>{t.categories}</h2>
        <ul>
          <li><a href="#">{t.allPosts}</a></li>
          <li><a href="#">{t.technology}</a></li>
          <li><a href="#">{t.programming}</a></li>
        </ul>
      </nav>
      {/* Outlet არის სადაც Nested Route-ის შვილი კომპონენტები გამოჩნდება */}
      <div className="content-area card-container">
        <Outlet /> 
      </div>
    </div>
  );
}

export default PostsLayout;
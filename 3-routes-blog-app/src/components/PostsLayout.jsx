import { Outlet } from 'react-router-dom';

function PostsLayout() {
  return (
    <div className="posts-layout-container">
      {/* აქ შეგიძლიათ დაამატოთ ნავიგაცია ან სხვა ელემენტები, რომლებიც საერთოა /posts-ისთვის */}
      <nav className="sidebar">
        <h2>კატეგორიები</h2>
        <ul>
          <li><a href="#">ტექნოლოგია</a></li>
          <li><a href="#">პროგრამირება</a></li>
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
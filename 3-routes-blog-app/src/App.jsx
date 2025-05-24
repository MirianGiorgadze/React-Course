import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // აპლიკაციის ძირითადი სტილები
import Home from './components/Home';
import About from './components/About';
import PostsLayout from './components/PostsLayout';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Nested Routes - მშობელი Route for /posts */}
            <Route path="/posts" element={<PostsLayout />}>
              {/* index route for /posts - default child component */}
              <Route index element={<PostList />} /> 
              {/* Nested Route for /posts/:id */}
              <Route path=":id" element={<PostDetail />} /> 
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
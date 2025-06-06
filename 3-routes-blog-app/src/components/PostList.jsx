import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

// იმიტირებული მონაცემები (შეგიძლიათ გადათარგმნოთ ან ცალკე ობიექტში გქონდეთ)
const posts = [
  { id: 1, title: 'React Router v6-ის სიახლეები', excerpt: 'გაიგეთ უახლესი ცვლილებების შესახებ React Router-ის მე-6 ვერსიაში.' },
  { id: 2, title: 'რა არის CSS-ის საფუძვლები?', excerpt: 'როგორ მოვაწყოთ სტილები ჩვენი ვებ-გვერდებისთვის.' },
  { id: 3, title: 'Vite-ის გამოყენება React პროექტებში', excerpt: 'როგორ დავიწყოთ ახალი პროექტი Vite-ით და მივიღოთ საოცარი განვითარების გამოცდილება.' },
  { id: 4, title: 'Nested Routing-ის ძალა', excerpt: 'როგორ მოვაწყოთ კომპლექსური UI Nested Routes-ის გამოყენებით.' },
];

function PostList() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="post-list card-container">
      <h2>{t.latestPosts}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`${post.id}`}> {/* ლინკი მიდის /posts/:id-ზე, რადგან მშობელი უკვე /posts-ზეა */}
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
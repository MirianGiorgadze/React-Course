import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

// იმიტირებული მონაცემები
const posts = [
  { id: 1, title: 'React Router v6-ის სიახლეები', content: 'React Router v6-მა შემოიტანა მრავალი გაუმჯობესება, მათ შორის ახალი Hooks-ები (`useRoutes`, `useNavigate`, `useParams`) და უფრო ინტუიციური API. ეს ვერსია ამარტივებს როუტინგის კონფიგურაციას და აუმჯობესებს შესრულებას.' },
  { id: 2, title: 'რა არის CSS-ის საფუძვლები?', content: 'CSS (Cascading Style Sheets) არის სტილების ენა, რომელიც გამოიყენება HTML დოკუმენტების ვიზუალური წარმოდგენის აღსაწერად. ის აკონტროლებს ფერებს, შრიფტებს, განლაგებას და სხვა ასპექტებს.' },
  { id: 3, title: 'Vite-ის გამოყენება React პროექტებში', content: 'Vite არის თანამედროვე Build Tool, რომელიც გამოირჩევა თავისი სისწრაფით. იგი იყენებს Native ES Modules-ს განვითარების დროს, რაც უზრუნველყოფს მყისიერ სერვერის გაშვებას და Hot Module Replacement (HMR)-ს.' },
  { id: 4, title: 'Nested Routing-ის ძალა', content: 'Nested Routing საშუალებას გაძლევთ მოაწყოთ თქვენი UI-ის ნაწილები URL-ის სეგმენტების მიხედვით. ეს განსაკუთრებით სასარგებლოა კომპლექსური აპლიკაციებისთვის, სადაც ერთი გვერდის შიგნით არსებობს მრავალი ქვეგვერდი ან ხედი. React Router-ში Nested Routes-ის იმპლემენტაცია ხდება `<Outlet />` კომპონენტის გამოყენებით.' },
];

function PostDetail() {
  const { id } = useParams(); // Nested Route-ის პარამეტრის მიღება
  const post = posts.find(p => p.id === parseInt(id));
  const { t } = useContext(LanguageContext);

  if (!post) {
    return (
      <div className="post-detail card-container not-found-post">
        <h2>{t.postNotFound}</h2>
        <p>{t.postNotFoundMessage}</p>
        <Link to="/posts" className="back-link">
          {t.backToList}
        </Link>
      </div>
    );
  }

  return (
    <div className="post-detail card-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/posts" className="back-link">
        {t.backToList}
      </Link>
    </div>
  );
}

export default PostDetail;
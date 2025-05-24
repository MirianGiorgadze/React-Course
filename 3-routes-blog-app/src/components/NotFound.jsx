import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page card-container">
      <h1>404</h1>
      <h2>გვერდი ვერ მოიძებნა</h2>
      <p>ბოდიში, მოძებნილი გვერდი არ არსებობს.</p>
      <Link to="/" className="back-link">
        მთავარ გვერდზე დაბრუნება
      </Link>
    </div>
  );
}

export default NotFound;
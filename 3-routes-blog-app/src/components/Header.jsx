import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header-nav">
      <div className="container">
        <Link to="/" className="brand-link">ჩემი ბლოგი</Link>
        <ul>
          <li>
            <Link to="/">მთავარი</Link>
          </li>
          <li>
            <Link to="/posts">პოსტები</Link>
          </li>
          <li>
            <Link to="/about">ჩვენს შესახებ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
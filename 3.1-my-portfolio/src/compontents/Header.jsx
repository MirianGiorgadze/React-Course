import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div>
        <Link to="/">მირიან გიორგაძე</Link>
        <ul>
          <li>
            <Link to="/">მთავარი</Link>
          </li>
          <li>
            <Link to="/about">ჩემს შესახებ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
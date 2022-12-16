import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mainHeader">
      <nav className="navBar">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/help" className="navLink">
          Help
        </Link>
      </nav>
    </div>
  );
};

export default Header;

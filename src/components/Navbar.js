// Hooks
import { useSelector } from "react-redux";

// Components
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Styles
import "./Navbar.css";

const AppNavbar = () => {
  const cart = useSelector((state) => state.cart);
  
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Cart App
        </Link>
        <nav className="ms-auto">
          <Link to="/products">Products</Link>
          <Link to="/cart">
            <AiOutlineShoppingCart className="icon" />{" "}
            <span>{cart.length}</span>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default AppNavbar;

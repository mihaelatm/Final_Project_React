import { Link } from "react-router-dom";
import logo_pet from "../../assets/images/logo_pet.svg";
import cart from "../../assets/icons/cart.svg";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header_container}>
      <div>
        <Link to="/">
          <img src={logo_pet} alt="logo_pet" />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/pages/home">Main Page</Link>
            <Link to="/pages/categories">Categories</Link>
            <Link to="/pages/all_products">All products</Link>
            <Link to="/pages/sales">All sales</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Link to="/pages/cart">
          <img src={cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

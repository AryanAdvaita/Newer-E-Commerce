import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar({ onSearch }) {
  const cart = useSelector((state) => state.cart);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <h2>E-Shop</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
      />
      <div className="cart">
        🛒 {cart.length}
      </div>
    </nav>
  );
}

export default Navbar;
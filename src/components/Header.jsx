import { useState } from "react";
import {
  MapPin,
  Search,
  ShoppingCart,
  Menu,
  Globe,
  ChevronDown,
} from "lucide-react";

export default function Header({
  cartCount,
  onSearch,
  onCartClick,
}) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [showAccount, setShowAccount] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <>
      <header className="main-header">
        <a href="#" className="logo header-hover" aria-label="Home">
          <span className="logo-text">amazon</span>
          <span className="logo-smile">⌣</span>
          <span className="logo-in">.in</span>
        </a>

        <button
          className="location-box header-hover"
          type="button"
          onClick={() => alert("Select your delivery location")}
        >
          <MapPin size={18} />
          <span>
            <small>Delivering to Bengaluru</small>
            <strong>Update location</strong>
          </span>
        </button>

        <form className="search-bar" onSubmit={handleSubmit}>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            aria-label="Select department"
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Books</option>
          </select>

          <input
            type="search"
            placeholder="Search Amazon.in"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products"
          />

          <button type="submit" aria-label="Search">
            <Search size={24} />
          </button>
        </form>

        <button className="language-box header-hover">
          <Globe size={18} />
          <strong>EN</strong>
          <ChevronDown size={12} />
        </button>

        <div
          className="account-wrapper"
          onMouseEnter={() => setShowAccount(true)}
          onMouseLeave={() => setShowAccount(false)}
        >
          <button
            className="account-box header-hover"
            onClick={() => setShowAccount(!showAccount)}
          >
            <small>Hello, sign in</small>
            <strong>
              Account & Lists <ChevronDown size={12} />
            </strong>
          </button>

          {showAccount && (
            <div className="account-dropdown">
              <button
                className="sign-in-button"
                onClick={() => alert("Connect your authentication here")}
              >
                Sign in
              </button>
              <p>New customer? <a href="#">Start here.</a></p>
              <hr />
              <strong>Your Account</strong>
              <a href="#">Your orders</a>
              <a href="#">Your wish list</a>
              <a href="#">Your recommendations</a>
              <a href="#">Your account settings</a>
            </div>
          )}
        </div>

        <a href="#" className="returns-box header-hover">
          <small>Returns</small>
          <strong>& Orders</strong>
        </a>

        <button
          className="cart-box header-hover"
          onClick={onCartClick}
          aria-label={`Cart with ${cartCount} items`}
        >
          <span className="cart-icon">
            <ShoppingCart size={34} />
            <span>{cartCount}</span>
          </span>
          <strong>Cart</strong>
        </button>
      </header>

      <div className="mobile-search">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            placeholder="Search Amazon.in"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <Search size={22} />
          </button>
        </form>
      </div>
    </>
  );
}
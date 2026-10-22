import { useMemo, useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";
import { products } from "./data/products";

import {
  X,
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  function handleSearch(query) {
    setSearchQuery(query.trim());
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        onSearch={handleSearch}
        onCartClick={() => setShowCart(true)}
      />

      <Navbar />

      <main>
        <HeroBanner />

        <div className="home-content">
          <CategoryGrid />

          <ProductSection
            title="Today's Deals"
            id="deals"
            products={filteredProducts}
            onAddToCart={addToCart}
          />

          <ProductSection
            title="Recommended for You"
            products={filteredProducts.slice().reverse()}
            onAddToCart={addToCart}
          />

          <ProductSection
            title="Best Sellers in Shopping"
            products={filteredProducts}
            onAddToCart={addToCart}
          />

          {searchQuery && (
            <div className="search-results-note">
              <h2>
                Search results for: "{searchQuery}"
              </h2>
              <p>
                {filteredProducts.length} product(s) found.
              </p>

              {filteredProducts.length === 0 && (
                <p>
                  No products found. Try searching for headphones,
                  shoes, watch, camera or backpack.
                </p>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {showCart && (
        <div
          className="cart-backdrop"
          onClick={() => setShowCart(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-header">
              <h2>
                <ShoppingCart size={23} />
                Shopping Cart ({cartCount})
              </h2>

              <button
                onClick={() => setShowCart(false)}
                aria-label="Close cart"
              >
                <X />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingCart size={54} />
                <h3>Your Amazon-style cart is empty</h3>
                <p>Add some products to get started.</p>
                <button
                  onClick={() => setShowCart(false)}
                  className="checkout-button"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <article className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div className="cart-item-info">
                        <strong>{item.name}</strong>
                        <p>
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>

                        <div className="quantity-controls">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>

                          <button
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={14} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="cart-summary">
                  <p>
                    Subtotal ({cartCount} items):
                    <strong>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </strong>
                  </p>

                  <button
                    className="checkout-button"
                    onClick={() =>
                      alert(
                        "Demo checkout. Connect a backend and payment provider to accept orders."
                      )
                    }
                  >
                    Proceed to checkout
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
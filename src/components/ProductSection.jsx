import { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

function ProductCard({ product, onAddToCart }) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <article className="product-card">
      {product.badge && (
        <span className="product-badge">{product.badge}</span>
      )}

      <a href={`#product-${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} loading="lazy" />
      </a>

      <div className="product-info">
        <a href={`#product-${product.id}`} className="product-name">
          {product.name}
        </a>

        <div className="product-rating">
          <span>{product.rating} ★</span>
          <small>({product.reviews.toLocaleString("en-IN")})</small>
        </div>

        <div className="product-prices">
          <span className="product-price">
            <small>₹</small>
            {product.price.toLocaleString("en-IN")}
          </span>
          <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
        </div>

        <p className="discount-text">{discount}% off</p>
        <p className="delivery-text">
          FREE delivery on eligible orders
        </p>

        <button
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default function ProductSection({
  title,
  products,
  onAddToCart,
  id = "products",
}) {
  const sliderRef = useRef(null);

  function scroll(direction) {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction * 500,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="product-section" id={id}>
      <div className="section-heading">
        <h2>{title}</h2>
        <a href="#products">See all deals</a>
      </div>

      <div className="product-slider-wrapper">
        <button
          className="slider-arrow slider-left"
          onClick={() => scroll(-1)}
          aria-label="Scroll products left"
        >
          <ChevronLeft />
        </button>

        <div className="product-slider" ref={sliderRef}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <button
          className="slider-arrow slider-right"
          onClick={() => scroll(1)}
          aria-label="Scroll products right"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
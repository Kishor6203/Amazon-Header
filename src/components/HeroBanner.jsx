import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Upgrade your everyday",
    subtitle: "Discover great deals on electronics and accessories.",
    button: "Explore deals",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1800",
  },
  {
    title: "Make your home beautiful",
    subtitle: "Find inspiration for every corner of your home.",
    button: "Shop home",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800",
  },
  {
    title: "Style that speaks for you",
    subtitle: "Explore clothing, shoes and accessories.",
    button: "Discover fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  function move(direction) {
    setCurrent(
      (current + direction + slides.length) % slides.length
    );
  }

  const slide = slides[current];

  return (
    <section className="hero">
      <img
        className="hero-image"
        src={slide.image}
        alt={slide.title}
      />

      <div className="hero-overlay" />

      <button
        className="hero-arrow hero-prev"
        onClick={() => move(-1)}
        aria-label="Previous slide"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        className="hero-arrow hero-next"
        onClick={() => move(1)}
        aria-label="Next slide"
      >
        <ChevronRight size={36} />
      </button>

      <div className="hero-content">
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
        <a href="#deals" className="hero-button">
          {slide.button}
        </a>
      </div>

      <div className="hero-dots">
        {slides.map((item, index) => (
          <button
            key={item.title}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
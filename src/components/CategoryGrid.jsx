import { categories } from "../data/products";

function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <h2>{category.title}</h2>

      <div className="category-items">
        {category.items.map((item) => (
          <a
            className="category-item"
            href="#products"
            key={item.name}
          >
            <img src={item.image} alt={item.name} loading="lazy" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>

      <a className="card-link" href="#products">
        See more
      </a>
    </article>
  );
}

export default function CategoryGrid() {
  return (
    <section className="category-grid">
      {categories.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </section>
  );
}
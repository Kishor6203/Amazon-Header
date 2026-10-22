import { Menu } from "lucide-react";
import { navLinks } from "../data/products";

export default function Navbar() {
  return (
    <nav className="navbar">
      <button className="nav-all">
        <Menu size={20} />
        <strong>All</strong>
      </button>

      <div className="nav-links">
        {navLinks.map((link) => (
          <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
            {link}
          </a>
        ))}
      </div>

      <a href="#deals" className="nav-promo">
        Great Indian Festival | Shop now
      </a>
    </nav>
  );
}
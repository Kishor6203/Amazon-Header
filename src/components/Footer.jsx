import { ArrowUp } from "lucide-react";

const footerColumns = [
  {
    title: "Get to Know Us",
    links: [
      "About Us",
      "Careers",
      "Press Releases",
      "Amazon Science",
    ],
  },
  {
    title: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Become an Affiliate",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "100% Purchase Protection",
      "Help",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={16} />
        Back to top
      </button>

      <div className="footer-columns">
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-brand">
        <a href="#" className="footer-logo">
          amazon<span>.in</span>
        </a>
        <button className="footer-language">🌐 English</button>
        <button className="footer-country">🇮🇳 India</button>
      </div>

      <div className="footer-services">
        <div>
          <strong>AbeBooks</strong>
          <span>Books, art & collectibles</span>
        </div>
        <div>
          <strong>Amazon Web Services</strong>
          <span>Scalable Cloud Computing Services</span>
        </div>
        <div>
          <strong>Audible</strong>
          <span>Download Audio Books</span>
        </div>
        <div>
          <strong>IMDb</strong>
          <span>Movies, TV & Celebrities</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <p>
          This is a demonstration storefront created for learning React.
        </p>
        <p>© 2026 Your React Shopping Project</p>
      </div>
    </footer>
  );
}
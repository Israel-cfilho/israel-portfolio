
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo-header.png";

const links = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#home" className="brand">
        <img src={logo} alt="Israel Dev - Logo" />
      </a>

      <nav className={`navigation ${menuOpen ? "active" : ""}`}>
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <a href="#contact" className="header-contact">
        Vamos conversar <span>↗</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.header>
  );
}

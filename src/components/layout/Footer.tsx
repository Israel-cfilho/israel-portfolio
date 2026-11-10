
import { ArrowUp } from "lucide-react";
import logo from "../../assets/images/logo-header.png";

const navigation = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];


function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.94 18.34H4.96V9.5h2.98v8.84ZM6.45 8.29a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm11.89 10.05h-2.97v-4.3c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.12-1.66 2.28v4.38H9.3V9.5h2.85v1.21h.04c.4-.7 1.37-1.44 2.82-1.44 3.02 0 3.58 1.99 3.58 4.58v4.49Z" />
    </svg>
  );
}


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            <img src={logo} alt="Israel Dev" />
            <span>
              Israel<span className="footer-brand-highlight">Dev</span>
            </span>
          </a>

          <p className="footer-description">
            Transformando ideias em soluções através da tecnologia.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/Israel-cfilho"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/israel-cfilho/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-navigation">
          <span className="footer-label">NAVEGAÇÃO</span>

          <nav>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Israel Lima. Todos os direitos reservados.</p>

        <p>Desenvolvido com dedicação por Israel Lima.</p>

        <a href="#home" className="back-to-top" aria-label="Voltar ao topo">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}

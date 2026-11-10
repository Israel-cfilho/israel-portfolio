
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import f1HubImage from "../assets/images/projects/f1-hub.png";
import primeViewImage from "../assets/images/projects/primeview.png";

const projects = [
  {
    number: "01",
    name: "F1Hub",
    category: "FULL STACK DEVELOPMENT",
    description:
      "Uma plataforma dedicada ao universo da Fórmula 1, desenvolvida com React e Spring Boot. O projeto utiliza a Jolpica API para integração e obtenção de dados do automobilismo.",
    technologies: [
      "React",
      "Vite",
      "Java",
      "Spring Boot",
      "Jolpica API",
    ],
    github: "https://github.com/Israel-cfilho/F1-Hub",
    demo: "https://f1-hub-lac.vercel.app/",
    image: f1HubImage,
    featured: true,
  },
  {
    number: "02",
    name: "PrimeView",
    category: "FRONT-END DEVELOPMENT",
    description:
      "Uma aplicação de filmes desenvolvida com React, que consome a API do TMDB para apresentar informações e conteúdos do universo cinematográfico.",
    technologies: [
      "React",
      "JavaScript",
      "TMDB API",
    ],
    github: "https://github.com/Israel-cfilho/PrimeView",
    demo: "https://primeflix-react.vercel.app/",
    image: primeViewImage,
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* CABEÇALHO */}
        <motion.div
          className="projects-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span
            className="section-eyebrow"
            variants={cardVariants}
          >
            <span className="eyebrow-line" />
            03 — PROJETOS
          </motion.span>

          <motion.h2 variants={cardVariants}>
            Ideias transformadas
            <br />
            em <span>projetos reais.</span>
          </motion.h2>

          <motion.p variants={cardVariants}>
            Alguns dos projetos que desenvolvi durante minha
            jornada, colocando em prática conhecimentos e
            explorando novas tecnologias.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.number}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >

              {/* IMAGEM DO PROJETO */}
              <div className="project-preview">
                <img
                  src={project.image}
                  alt={`Captura de tela do projeto ${project.name}`}
                  className="project-image"
                  loading="lazy"
                />

                <span className="project-image-number">
                  / {project.number}
                </span>

                <div className="project-image-overlay">
                  <span>VISUALIZAÇÃO DO PROJETO</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* INFORMAÇÕES */}
              <div className="project-content">

                <div className="project-title-row">
                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.name}</h3>
                  </div>

                  <span className="project-index">
                    / {project.number}
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECNOLOGIAS */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="project-links">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código do ${project.name} no GitHub`}
                  >
                    <Github size={17} />
                    GitHub
                    <ArrowUpRight size={15} />
                  </a> */}

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-link"
                    aria-label={`Visualizar ${project.name}`}
                  >
                    <ExternalLink size={17} />
                    Visualizar projeto
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* RODAPÉ DA SEÇÃO */}
        <motion.div
          className="projects-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>MAIS PROJETOS EM DESENVOLVIMENTO</span>
          <div />
        </motion.div>

      </div>
    </section>
  );
}

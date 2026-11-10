
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Front-end",
    description: "Interfaces modernas e experiências digitais.",
    icon: Code2,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    number: "02",
    title: "Back-end",
    description: "Lógica, APIs e desenvolvimento de aplicações.",
    icon: Server,
    technologies: ["Java", "Spring Boot", "Node.js"],
  },
  {
    number: "03",
    title: "Banco de dados",
    description: "Armazenamento e gerenciamento de informações.",
    icon: Database,
    technologies: ["MySQL", "Postgress", "Firebase"],
  },
  {
    number: "04",
    title: "Ferramentas",
    description: "Ferramentas utilizadas no desenvolvimento.",
    icon: Wrench,
    technologies: ["Git", "GitHub"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Technologies() {
  return (
    <section className="technologies-section" id="technologies">
      <div className="technologies-container">
        <motion.div
          className="technologies-heading"
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
            02 — TECNOLOGIAS
          </motion.span>

          <motion.h2 variants={cardVariants}>
            Ferramentas que dão
            <br />
            <span>vida às ideias.</span>
          </motion.h2>

          <motion.p variants={cardVariants}>
            Tecnologias que utilizo nos meus estudos e projetos,
            sempre buscando evoluir e ampliar meus conhecimentos.
          </motion.p>
        </motion.div>

        <motion.div
          className="technologies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.article
                className="technology-card"
                key={category.number}
                variants={cardVariants}
                whileHover={{ y: -7 }}
              >
                <div className="technology-card-top">
                  <div className="technology-icon">
                    <Icon size={23} />
                  </div>

                  <span className="technology-number">
                    {category.number}
                  </span>
                </div>

                <div className="technology-card-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <div className="technology-tags">
                  {category.technologies.map((technology) => (
                    <span className="technology-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="technology-card-footer">
                  <span>TECNOLOGIAS</span>
                  <ArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

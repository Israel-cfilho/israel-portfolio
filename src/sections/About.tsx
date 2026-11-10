
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Ciência da Computação",
    detail: "UEPB / 2021 - 2026",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Full Stack",
    detail: "Front-end & Back-end",
  },
  {
    icon: Rocket,
    title: "Objetivo",
    description: "Evolução constante",
    detail: "Sempre aprendendo",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span
            className="section-eyebrow"
            variants={itemVariants}
          >
            <span className="eyebrow-line" />
            01 — SOBRE MIM
          </motion.span>

          <motion.h2 variants={itemVariants}>
            Muito prazer,
            <br />
            sou <span>Israel Lima.</span>
          </motion.h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="about-intro"
              variants={itemVariants}
            >
              <span className="intro-symbol">“</span>

              <p>
                Sou formado em Ciência da Computação pela UEPB
                e tenho interesse em transformar ideias em
                soluções através da tecnologia.
              </p>
            </motion.div>

            <motion.p
              className="about-text"
              variants={itemVariants}
            >
              Minha trajetória no desenvolvimento começou pelo
              Front-end, explorando interfaces, layouts e
              experiências digitais. Com o tempo, meu interesse
              se expandiu para o Back-end, buscando compreender
              como as aplicações funcionam por trás das telas.
            </motion.p>

            <motion.p
              className="about-text"
              variants={itemVariants}
            >
              Atualmente, venho aprofundando meus conhecimentos
              em Java, Spring Boot e MySQL, enquanto continuo
              evoluindo no ecossistema React. Meu objetivo é
              construir aplicações completas, funcionais e bem
              estruturadas.
            </motion.p>

            <motion.a
              href="#projects"
              className="about-link"
              variants={itemVariants}
            >
              Conheça meus projetos
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <div className="about-visual-glow" />

            <div className="about-code-card">
              <div className="code-card-header">
                <div className="code-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>developer.ts</span>

                <Terminal size={17} />
              </div>

              <div className="code-card-body">
                <p>
                  <span className="code-purple">const</span>{" "}
                  developer = {"{"}
                </p>

                <p className="code-indent">
                  name: <span className="code-green">"Israel Lima"</span>,
                </p>

                <p className="code-indent">
                  role: <span className="code-green">"Full Stack Developer"</span>,
                </p>

                <p className="code-indent">
                  education: <span className="code-green">"Computer Science"</span>,
                </p>

                <p className="code-indent">
                  university: <span className="code-green">"UEPB"</span>,
                </p>

                <p className="code-indent">
                  focus: [
                </p>

                <p className="code-indent code-indent-two">
                  <span className="code-cyan">"React"</span>,
                </p>

                <p className="code-indent code-indent-two">
                  <span className="code-cyan">"Java"</span>,
                </p>

                <p className="code-indent code-indent-two">
                  <span className="code-cyan">"Spring Boot"</span>,
                </p>

                <p className="code-indent code-indent-two">
                  <span className="code-cyan">"MySQL"</span>
                </p>

                <p className="code-indent">
                  ]
                </p>

                <p>{"};"}</p>
              </div>

              <div className="code-card-footer">
                <span className="code-status-dot" />
                Sempre evoluindo e aprendendo
              </div>
            </div>

            <div className="about-floating-label">
              <Code2 size={17} />
              <span>BUILDING THE FUTURE</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-highlights"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="highlight-card"
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-top">
                  <div className="highlight-icon">
                    <Icon size={22} />
                  </div>

                  <span className="highlight-index">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <span className="highlight-title">
                    {item.title}
                  </span>

                  <h3>{item.description}</h3>

                  <p>{item.detail}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

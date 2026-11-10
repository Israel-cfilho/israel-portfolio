import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";

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
    y: 30,
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

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="availability" variants={itemVariants}>
          <span className="availability-dot" />
          Desenvolvedor Full Stack
        </motion.div>

        <motion.p className="hero-greeting" variants={itemVariants}>
          OLÁ, EU SOU
        </motion.p>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="name-line">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Israel
            </motion.span>
          </span>

          <span className="name-line name-highlight">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Lima.
            </motion.span>
          </span>
        </motion.h1>

        <motion.div className="hero-description" variants={itemVariants}>
          <div className="description-line" />

          <p>
            Desenvolvedor de software apaixonado por tecnologia, criando
            soluções web com foco em funcionalidade, experiência e qualidade.
          </p>
        </motion.div>

        <motion.div className="hero-technologies" variants={itemVariants}>
          <span>REACT</span>
          <span>JAVA</span>
          <span>SPRING BOOT</span>
          <span>MYSQL</span>
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#projects" className="button-primary">
            Explorar projetos
            <ArrowUpRight size={19} />
          </a>

          <a href="#contact" className="button-secondary">
            <Code2 size={18} />
            Entrar em contato
          </a>

          <a
            href="/curriculo.pdf"
            download="Israel-Lima-Curriculo.pdf"
            className="hero-button hero-button-secondary"
          >
            Baixar currículo
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <div className="visual-core">
          <Code2 size={70} strokeWidth={1} />
        </div>

        <div className="floating-tech tech-react">REACT</div>
        <div className="floating-tech tech-java">JAVA</div>
        <div className="floating-tech tech-spring">SPRING</div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <span>SCROLL PARA EXPLORAR</span>
        <ArrowDown size={16} />
      </motion.a>

      <div className="hero-index">01 / 06</div>
    </section>
  );
}

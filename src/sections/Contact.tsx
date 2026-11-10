
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Send,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";
const contactLinks = [
  {
    label: "GitHub",
    value: "Israel-cfilho",
    href: "https://github.com/Israel-cfilho",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Israel Lima",
    href: "https://www.linkedin.com/in/israel-cfilho/",
    icon: BriefcaseBusiness,
  },
  {
    label: "E-mail",
    value: "Entre em contato",
    href: "mailto:israelcfilho38@gmail.com",
    icon: Mail,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
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
            04 — CONTATO
          </motion.span>

          <motion.h2 variants={itemVariants}>
            Vamos construir
            <br />
            algo <span>juntos?</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            Estou aberto a novas oportunidades e conexões.
            Se você tem um projeto, uma oportunidade profissional
            ou simplesmente quer conversar sobre tecnologia,
            será um prazer entrar em contato.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-main-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-card-glow" />

          <div className="contact-card-content">
            <div className="contact-status">
              <span />
              DISPONÍVEL PARA OPORTUNIDADES
            </div>

            <h3>
              Tem uma oportunidade
              <br />
              interessante?
            </h3>

            <p>
              Vamos conversar! Estou sempre disposto a aprender,
              colaborar e encarar novos desafios.
            </p>

            <a
              href="https://wa.me/5583999760359"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta"
            >
              <MessageCircle size={19} />
              Entrar em contato
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-card-decoration">
            <div className="contact-decoration-circle">
              <Send size={48} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                href={item.href}
                target={item.label === "E-mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="contact-link-card"
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="contact-link-icon">
                  <Icon size={21} />
                </div>

                <div className="contact-link-info">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>

                <ArrowUpRight size={18} className="contact-link-arrow" />
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

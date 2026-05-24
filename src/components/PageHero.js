import { motion } from 'framer-motion';
import { containerStagger, fadeUp, fadeUpTransition } from '../animations';
import Navbar from './Navbar';
import './PageHero.css';

function PageHero({ title, subtitle, eyebrow }) {
  return (
    <header className="page-hero hero-section">
      <Navbar />
      <div className="page-hero__overlay" />
      <motion.div
        className="page-hero__content"
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        {eyebrow && <motion.p variants={fadeUp} transition={fadeUpTransition}>{eyebrow}</motion.p>}
        <motion.h1 variants={fadeUp} transition={fadeUpTransition}>{title}</motion.h1>
        <motion.span variants={fadeUp} transition={fadeUpTransition}>{subtitle}</motion.span>
      </motion.div>
    </header>
  );
}

export default PageHero;

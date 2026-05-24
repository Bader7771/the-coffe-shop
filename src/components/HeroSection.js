import { motion } from 'framer-motion';
import { containerStagger, fadeUp, fadeUpTransition } from '../animations';
import Navbar from './Navbar';
import './HeroSection.css';

const heroVideoUrl = `${process.env.PUBLIC_URL}/assets/coffe.mp4`;
const heroPosterUrl = `${process.env.PUBLIC_URL}/assets/coffe.mp4`;

function HeroSection() {
  return (
    <section className="hero hero-section" aria-label="Specialty coffee and pottery studio">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={heroPosterUrl}
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <Navbar />

      <motion.div
        className="hero__content"
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__eyebrow" variants={fadeUp} transition={fadeUpTransition}>
          Sip, create and connect
        </motion.p>
        <motion.h1 variants={fadeUp} transition={fadeUpTransition}>
          Specialty coffee & pottery studio
        </motion.h1>
        <motion.p className="hero__description" variants={fadeUp} transition={fadeUpTransition}>
          Un lieu hybride o&ugrave; l&rsquo;on vient savourer un caf&eacute;,
          cr&eacute;er de ses mains et partager un moment, simplement.
        </motion.p>
        <motion.p className="hero__address" variants={fadeUp} transition={fadeUpTransition}>
          25 boulevard du Temple, 75003 Paris
        </motion.p>

        <motion.div className="hero__buttons" aria-label="Hero actions" variants={fadeUp} transition={fadeUpTransition}>
          <a className="button button--primary" href="#reservation">
            R&eacute;server un atelier
          </a>
          <a className="button button--secondary" href="#carte">
            D&eacute;couvrir la carte
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

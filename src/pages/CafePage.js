import { motion } from 'framer-motion';
import { containerStagger, fadeUp, fadeUpTransition, viewportOnce } from '../animations';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import './CafePage.css';

const menuHighlights = [
  {
    image: 'https://i.pinimg.com/736x/a0/fa/1d/a0fa1dd11a05dacbb66f1d7efab428b0.jpg',
    alt: 'Cafes de specialite',
    label: <>S&Eacute;LECTION CAF&Eacute;</>,
    title: <>Caf&eacute;s de sp&eacute;cialit&eacute;</>,
    text: <>Espresso, latte, cappuccino, matcha et boissons signatures pr&eacute;par&eacute;es avec soin.</>,
    cta: <>D&eacute;couvrir nos caf&eacute;s</>,
    href: '#nos-cafes',
  },
  {
    image: 'https://i.pinimg.com/1200x/62/c8/ec/62c8ec663ed192219be5cdd6b6ce8492.jpg',
    alt: 'Boissons fraiches et douceurs',
    label: <>FAIT MAISON</>,
    title: <>Boissons fra&icirc;ches & douceurs</>,
    text: <>Iced latte, jus, p&acirc;tisseries et gourmandises &agrave; savourer sur place.</>,
    cta: <>Voir les douceurs</>,
    href: '#douceurs',
  },
];

const coffeeInfos = [
  {
    title: 'Origine des cafés',
    text: 'Une sélection de grains choisis pour leur équilibre, leur fraîcheur et leur caractère.',
  },
  {
    title: 'Préparation & extraction',
    text: 'Espresso, filtre ou boissons douces, chaque tasse est préparée avec précision.',
  },
  {
    title: 'Nos torréfacteurs',
    text: 'Des partenaires passionnés qui travaillent le café avec exigence et respect.',
  },
];

function CafePage() {
  return (
    <div className="page cafe-page">
      <PageHero
        eyebrow="Coffee Arts Paris"
        title="La carte"
        subtitle="Une sélection pensée autour du café, du fait-maison et du plaisir de partager."
      />

      <div className="page__content">
        <section className="page-section cafe-menu">
          <motion.div
            className="cafe-highlights-grid cafe-menu__grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {menuHighlights.map((item) => (
              <motion.article className="cafe-highlight-card cafe-menu__card" key={item.alt} variants={fadeUp} transition={fadeUpTransition}>
                <img src={item.image} alt={item.alt} />
                <div className="cafe-highlight-overlay" />
                <div className="cafe-highlight-content">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={item.href}>{item.cta}</a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="page-section cafe-info" id="nos-cafes">
          <SectionTitle title="Nos cafés" text="Des boissons pensées pour accompagner vos moments créatifs." />
          <motion.div
            className="cafe-info__box soft-card"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {coffeeInfos.map((item) => (
              <motion.article className="cafe-info__card" key={item.title} variants={fadeUp} transition={fadeUpTransition}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="page-section cafe-cta soft-card"
          id="douceurs"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <h2>Une expérience à vivre sur place</h2>
          <p>Toutes les informations pour venir découvrir le café.</p>
          <a className="page-button" href="/contact">Nous rendre visite</a>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}

export default CafePage;

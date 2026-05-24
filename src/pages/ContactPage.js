import { motion } from 'framer-motion';
import { MdAccessTime, MdEmail, MdPhone } from 'react-icons/md';
import { containerStagger, fadeUp, fadeUpTransition, viewportOnce } from '../animations';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import './ContactPage.css';

const contactInfo = [
  { label: 'Phone', value: '07.66.91.82.94', icon: MdPhone },
  { label: 'Email', value: 'coffeeartsparis@gmail.com', icon: MdEmail },
  { label: 'Opening hours', value: 'Mar. - Dim. 08h - 21h', icon: MdAccessTime },
];

const collaborations = [
  ['Partenariats', 'Imaginer une collaboration autour du café, de la céramique ou d’un événement.'],
  ['Influenceurs', 'Créer du contenu sensible et authentique dans l’univers Coffee Arts Paris.'],
  ['Presse', 'Recevoir les informations, visuels et demandes médias autour du lieu.'],
];

function ContactPage() {
  return (
    <div className="page contact-page">
      <PageHero
        eyebrow="Coffee Arts Paris"
        title="Contactez-nous"
        subtitle="Une question sur nos ateliers, notre café ou nos produits ? Nous sommes là pour vous répondre."
      />

      <div className="page__content">
        <section className="page-section contact-info">
          <motion.div
            className="contact-info__grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {contactInfo.map(({ label, value, icon: Icon }) => (
              <motion.article className="contact-info__card soft-card" key={label} variants={fadeUp} transition={fadeUpTransition}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
                <strong>{value}</strong>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="page-section visit-section">
          <SectionTitle
            title="Nous rendre visite"
            text="25 Boulevard du Temple, 75003 Paris"
          />
          <motion.div
            className="map-card soft-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={fadeUpTransition}
          >
            <iframe
              title="Coffee Arts Paris map"
              src="https://www.google.com/maps?q=25%20Boulevard%20du%20Temple%2075003%20Paris&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

        <section className="page-section collaborations">
          <SectionTitle title="Collaborations" />
          <motion.div
            className="collaboration-grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {collaborations.map(([title, text]) => (
              <motion.article className="collaboration-card soft-card" key={title} variants={fadeUp} transition={fadeUpTransition}>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="page-section contact-form-section">
          <motion.div
            className="contact-form-card soft-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={fadeUpTransition}
          >
            <SectionTitle align="left" title="Formulaire de contact" />
            <form className="contact-form">
              <label>
                Name
                <input type="text" name="name" placeholder="Votre nom" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="votre@email.com" />
              </label>
              <label>
                Object
                <select name="object" defaultValue="">
                  <option value="" disabled>Choisir un sujet</option>
                  <option>Atelier céramique</option>
                  <option>Café</option>
                  <option>Boutique</option>
                  <option>Événement privé</option>
                  <option>Collaboration</option>
                </select>
              </label>
              <label className="contact-form__message">
                Message
                <textarea name="message" rows="6" placeholder="Votre message" />
              </label>
              <button className="page-button" type="button">Envoyer</button>
            </form>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;

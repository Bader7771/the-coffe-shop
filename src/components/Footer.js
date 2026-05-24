import { motion } from 'framer-motion';
import { FaInstagram, FaPinterestP, FaTiktok } from 'react-icons/fa6';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { fadeUp, fadeUpTransition, viewportOnce } from '../animations';
import './Footer.css';

const discoverLinks = [
  { label: 'Cafe', path: '/cafe' },
  { label: 'Ceramique', path: '/ceramique' },
  { label: 'Boutique', path: '/boutique' },
  { label: 'Evenements', path: '/evenements' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Espace client', path: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: '#instagram', icon: FaInstagram },
  { label: 'TikTok', href: '#tiktok', icon: FaTiktok },
  { label: 'Pinterest', href: '#pinterest', icon: FaPinterestP },
];

const legalLinks = [
  'Politique de confidentialite',
  'Politique cookies',
  'Mentions legales',
  'CGV',
];

const payments = ['Mastercard', 'VISA', 'Apple Pay', 'PayPal'];

function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, amount: 0.1 }}
      transition={{ ...fadeUpTransition, duration: 0.55 }}
    >
      <div className="footer__inner">
        <div className="footer__columns">
          <div className="footer__brand">
            <Link className="footer__logo" to="/" aria-label="Coffee Arts Paris home">
              <span>Coffee Arts</span>
              <strong>Paris</strong>
            </Link>
            <p>
              Un lieu unique o&ugrave; la c&eacute;ramique rencontre le caf&eacute;
              artisanal &agrave; Paris.
            </p>
            <small>Cr&eacute;er, d&eacute;guster, partager.</small>

            <div className="footer__socials" aria-label="Social media links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a href={href} key={label} aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__block">
            <h2>D&eacute;couvrir</h2>
            <div className="footer__links">
              {discoverLinks.map((link) => (
                <Link to={link.path} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__block">
            <h2>Contact</h2>
            <ul className="footer__contact">
              <li>
                <MdPhone aria-hidden="true" />
                <a href="tel:+33766918294">07.66.91.82.94</a>
              </li>
              <li>
                <MdEmail aria-hidden="true" />
                <a href="mailto:coffeeartsparis@gmail.com">coffeeartsparis@gmail.com</a>
              </li>
              <li>
                <MdLocationOn aria-hidden="true" />
                <span>
                  25 Boulevard du Temple
                  <br />
                  75003 Paris
                </span>
              </li>
            </ul>
          </div>

          <div className="footer__block">
            <h2>Horaires</h2>
            <div className="footer__hours">
              <div>
                <span>Mardi - Mercredi - Jeudi - Vendredi</span>
                <strong>08h - 20h</strong>
              </div>
              <div>
                <span>Samedi - Dimanche</span>
                <strong>10h - 21h</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Coffee Arts Paris. Tous droits r&eacute;serv&eacute;s.</p>

          <div className="footer__payments" aria-label="Accepted payment methods">
            {payments.map((payment) => (
              <span key={payment}>{payment}</span>
            ))}
          </div>

          <div className="footer__legal">
            {legalLinks.map((link) => (
              <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

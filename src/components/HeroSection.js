import { FaInstagram, FaPinterestP, FaTiktok } from 'react-icons/fa6';
import Navbar from './Navbar';
import './HeroSection.css';

const socialLinks = [
  { label: 'Instagram', href: '#instagram', icon: FaInstagram },
  { label: 'TikTok', href: '#tiktok', icon: FaTiktok },
  { label: 'Pinterest', href: '#pinterest', icon: FaPinterestP },
];

const heroVideoUrl = `${process.env.PUBLIC_URL}/assets/coffe.mp4`;
const heroPosterUrl = 'https://i.pinimg.com/736x/71/cd/19/71cd19ed66b4fe7cb9f0f4bfa71b4d8a.jpg';

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

      <div className="hero__content">
        <p className="hero__eyebrow">Sip, create and connect</p>
        <h1>Specialty coffee & pottery studio</h1>
        <p className="hero__description">
          Un lieu hybride o&ugrave; l&rsquo;on vient savourer un caf&eacute;,
          cr&eacute;er de ses mains et partager un moment, simplement.
        </p>
        <p className="hero__address">25 boulevard du Temple, 75003 Paris</p>

        <div className="hero__buttons" aria-label="Hero actions">
          <a className="button button--primary" href="#reservation">
            R&eacute;server un atelier
          </a>
          <a className="button button--secondary" href="#carte">
            D&eacute;couvrir la carte
          </a>
        </div>
      </div>

      <div className="social-rail" aria-label="Social media links">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a href={href} key={label} aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;

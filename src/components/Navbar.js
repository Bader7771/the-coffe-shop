import { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { GiCoffeeCup } from 'react-icons/gi';
import {
  MdArticle,
  MdEvent,
  MdLocalCafe,
  MdOutlineContactMail,
  MdPerson,
  MdVerified,
} from 'react-icons/md';
import './Navbar.css';

const navLeft = [
  { label: 'Cafe', href: '#cafe', icon: MdLocalCafe },
  { label: 'Ceramique', href: '#ceramique', icon: GiCoffeeCup },
  { label: 'Boutique', href: '#boutique', icon: BsBag },
];

const navRight = [
  { label: 'Evenements', href: '#evenements', icon: MdEvent },
  { label: 'Blog', href: '#blog', icon: MdArticle },
  { label: 'Contact', href: '#contact', icon: MdOutlineContactMail },
];

const mobileLinks = [
  ...navLeft,
  ...navRight,
  { label: 'Nos engagements', href: '#engagements', icon: MdVerified },
  { label: 'Espace client', href: '#client', icon: MdPerson },
];

function NavLink({ item, onClick }) {
  const Icon = item.icon;

  return (
    <a href={item.href} onClick={onClick}>
      <Icon aria-hidden="true" />
      <span>{item.label}</span>
    </a>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__links navbar__links--left">
        {navLeft.map((item) => (
          <NavLink item={item} key={item.label} />
        ))}
      </div>

      <a className="navbar__logo" href="#top" aria-label="Coffee Arts Paris home">
        <span>Coffee Arts</span>
        <strong>Paris</strong>
      </a>

      <div className="navbar__links navbar__links--right">
        {navRight.map((item) => (
          <NavLink item={item} key={item.label} />
        ))}
      </div>

      <button
        className={`navbar__menu ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div className="navbar__actions" aria-label="Account and cart">
        <button type="button" aria-label="Espace client">
          <MdPerson aria-hidden="true" />
        </button>
        <button type="button" aria-label="Boutique">
          <BsBag aria-hidden="true" />
        </button>
      </div>

      <div className={`navbar__mobile-panel ${isOpen ? 'is-open' : ''}`}>
        {mobileLinks.map((item) => (
          <NavLink item={item} key={item.label} onClick={closeMenu} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

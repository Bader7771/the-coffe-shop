import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { GiCoffeeCup } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import {
  MdArticle,
  MdEvent,
  MdLocalCafe,
  MdOutlineContactMail,
  MdPerson,
} from 'react-icons/md';
import './Navbar.css';

const navLeft = [
  { label: 'Cafe', path: '/cafe', icon: MdLocalCafe },
  { label: 'Ceramique', path: '/ceramique', icon: GiCoffeeCup },
  { label: 'Boutique', path: '/boutique', icon: BsBag },
];

const navRight = [
  { label: 'Evenements', path: '/evenements', icon: MdEvent },
  { label: 'Blog', path: '/blog', icon: MdArticle },
  { label: 'Contact', path: '/contact', icon: MdOutlineContactMail },
];

const mobileLinks = [
  ...navLeft,
  ...navRight,
  { label: 'Espace client', path: '/contact', icon: MdPerson },
];

function NavLink({ item, onClick, className }) {
  const Icon = item.icon;

  return (
    <RouterNavLink to={item.path} onClick={onClick} className={className}>
      <Icon aria-hidden="true" />
      <span>{item.label}</span>
    </RouterNavLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      <header className="navbar" aria-label="Main navigation">
        <div className="navbar__links navbar__links--left">
          {navLeft.map((item) => (
            <NavLink item={item} key={item.label} />
          ))}
        </div>

        <Link className="navbar__logo" to="/" aria-label="Coffee Arts Paris home" onClick={closeMenu}>
          <span>Coffee Arts</span>
          <strong>Paris</strong>
        </Link>

        <div className="navbar__links navbar__links--right">
          {navRight.map((item) => (
            <NavLink item={item} key={item.label} />
          ))}
        </div>

        <button
          className="navbar__menu"
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span />
          <span />
        </button>

        <div className="navbar__actions" aria-label="Account and cart">
          <Link to="/contact" aria-label="Espace client">
            <MdPerson aria-hidden="true" />
          </Link>
          <Link to="/boutique" aria-label="Boutique">
            <BsBag aria-hidden="true" />
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu-card"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, scale: 0.88, y: -12, x: 18 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -8, x: 14 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mobile-menu-header">
                <Link className="mobile-menu-logo" to="/" aria-label="Coffee Arts Paris home" onClick={closeMenu}>
                  <small>Coffee Arts</small>
                  <span>Paris</span>
                </Link>
                <button className="mobile-close-btn" type="button" onClick={closeMenu} aria-label="Close menu">
                  <IoClose aria-hidden="true" />
                </button>
              </div>

              <nav className="mobile-nav-links" aria-label="Mobile navigation links">
                {mobileLinks.map((item) => (
                  <NavLink
                    item={item}
                    key={item.label}
                    onClick={closeMenu}
                    className="mobile-nav-link"
                  />
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

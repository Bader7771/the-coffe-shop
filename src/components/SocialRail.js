import { FaInstagram, FaPinterestP, FaTiktok } from 'react-icons/fa6';

const socialLinks = [
  { label: 'Instagram', href: '#instagram', icon: FaInstagram },
  { label: 'TikTok', href: '#tiktok', icon: FaTiktok },
  { label: 'Pinterest', href: '#pinterest', icon: FaPinterestP },
];

function SocialRail() {
  return (
    <div className="social-rail" aria-label="Social media links">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a href={href} key={label} aria-label={label}>
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default SocialRail;

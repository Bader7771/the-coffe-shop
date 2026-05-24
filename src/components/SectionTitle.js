import './SectionTitle.css';

function SectionTitle({ kicker, title, text, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {kicker && <p>{kicker}</p>}
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

export default SectionTitle;

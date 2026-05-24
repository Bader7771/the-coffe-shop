import { FaArrowRight } from 'react-icons/fa6';
import './ExperiencesSection.css';

const experiences = [
  {
    label: 'D\u00c9GUSTER',
    title: 'Caf\u00e9 de sp\u00e9cialit\u00e9',
    cta: 'D\u00e9couvrir la carte',
    href: '#carte',
    image: 'https://i.pinimg.com/736x/e5/d8/bd/e5d8bd768cac9652dbfaad05d917cb13.jpg',
  },
  {
    label: 'CR\u00c9ER',
    title: 'Ateliers cr\u00e9atifs',
    cta: 'Participer \u00e0 un atelier',
    href: '#ateliers',
    image: 'https://i.pinimg.com/1200x/e9/2b/df/e92bdfd21c2c167ac1a8785870f9353d.jpg',
  },
  {
    label: 'EMPORTER',
    title: 'La boutique',
    cta: 'Explorer la boutique',
    href: '#boutique',
    image: 'https://i.pinimg.com/736x/ca/a4/93/caa4934e8e5842cc8cf8145933355816.jpg',
  },
];

function ExperiencesSection() {
  return (
    <section className="experiences experiences-section" aria-labelledby="experiences-title">
      <div className="experiences__inner">
        <div className="experiences__header">
          <p className="experiences__kicker">Maison cafe & ceramique</p>
          <h2 id="experiences-title">Trois exp&eacute;riences, un m&ecirc;me lieu</h2>
          <p>
            Un caf&eacute; de sp&eacute;cialit&eacute;, des ateliers cr&eacute;atifs et
            une boutique, pens&eacute;s pour se compl&eacute;ter.
          </p>
        </div>

        <div className="experiences__grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.title}>
              <div
                className="experience-card__image"
                style={{ backgroundImage: `url(${experience.image})` }}
              />
              <div className="experience-card__overlay" />

              <div className="experience-card__content">
                <span>{experience.label}</span>
                <h3>{experience.title}</h3>
                <a href={experience.href}>
                  {experience.cta}
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;

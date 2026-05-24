import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import './EvenementsPage.css';

const events = [
  ['Soirée céramique', 'Prochaine date', 'Une soirée conviviale pour peindre, créer et partager.', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80'],
  ['Atelier brunch', 'Bientôt', 'Un atelier créatif accompagné de douceurs et boissons maison.', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80'],
  ['Événement privé', 'Sur demande', 'Anniversaire, team building ou moment entre amis dans un cadre chaleureux.', 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80'],
  ['Collaboration artistique', 'À venir', 'Des rencontres autour de la création, de la céramique et du café.', 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=900&q=80'],
];

function EvenementsPage() {
  return (
    <div className="page evenements-page">
      <PageHero
        eyebrow="Agenda"
        title="Événements"
        subtitle="Des moments créatifs et gourmands à vivre ensemble."
      />

      <div className="page__content">
        <section className="page-section events-list">
          <SectionTitle title="À venir" text="Des rendez-vous créatifs pour découvrir Coffee Arts autrement." />
          <div className="events-grid">
            {events.map(([title, date, description, image]) => (
              <article className="event-card soft-card" key={title}>
                <img src={image} alt={title} />
                <div>
                  <span>{date}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a className="page-button" href="/contact">Découvrir</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section private-events soft-card">
          <SectionTitle
            title="Privatiser Coffee Arts Paris"
            text="Pour vos événements, anniversaires, team buildings ou collaborations."
          />
          <a className="page-button" href="/contact">Demander une proposition</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default EvenementsPage;

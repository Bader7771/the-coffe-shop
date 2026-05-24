import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import './CeramiquePage.css';

const workshops = [
  {
    title: 'Atelier découverte',
    description: 'Une première approche douce pour créer une pièce simple et personnelle.',
    duration: '1h30',
    price: 'À partir de 35€',
    image: 'https://i.pinimg.com/736x/a4/56/7b/a4567b06fd040b906c2a354d8f9921a9.jpg',
  },
  {
    title: 'Atelier peinture',
    description: 'Personnalisez une céramique avec couleurs, motifs et conseils créatifs.',
    duration: '2h',
    price: 'À partir de 39€',
    image: 'https://i.pinimg.com/736x/59/ed/64/59ed643d1dc7f7e07c575f29f83789ca.jpg',
  },
  {
    title: 'Atelier modelage',
    description: 'Modelez la terre à la main et explorez les volumes à votre rythme.',
    duration: '2h30',
    price: 'À partir de 49€',
    image: 'https://i.pinimg.com/1200x/cd/f4/59/cdf4597df3faa5d7401a7b6dcf9942fe.jpg',
  },
  {
    title: 'Atelier privé',
    description: 'Un format sur mesure pour un moment entre proches ou en équipe.',
    duration: 'Sur demande',
    price: 'Devis personnalisé',
    image: 'https://i.pinimg.com/1200x/2b/20/f0/2b20f016debaeeff81c69e4ccfe4741f.jpg',
  },
];

const steps = ['Choisir son atelier', 'Créer avec accompagnement', 'Laisser sécher / cuire', 'Récupérer sa pièce'];

function CeramiquePage() {
  return (
    <div className="page ceramique-page">
      <PageHero
        eyebrow="Ateliers"
        title="Céramique"
        subtitle="Des ateliers créatifs pour apprendre, créer et partager un moment unique."
      />

      <div className="page__content">
        <section className="page-section workshops">
          <SectionTitle title="Nos ateliers" text="Des formats accessibles, guidés et pensés pour tous les niveaux." />
          <div className="workshops__grid">
            {workshops.map((item) => (
              <article className="workshop-card soft-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="workshop-card__meta">
                    <span>{item.duration}</span>
                    <strong>{item.price}</strong>
                  </div>
                  <a className="page-button" href="/contact">Réserver</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section ceramic-process">
          <SectionTitle title="Comment se déroule un atelier ?" />
          <div className="ceramic-process__grid">
            {steps.map((step, index) => (
              <article className="ceramic-step soft-card" key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default CeramiquePage;

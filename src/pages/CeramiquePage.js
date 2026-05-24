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
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Atelier peinture',
    description: 'Personnalisez une céramique avec couleurs, motifs et conseils créatifs.',
    duration: '2h',
    price: 'À partir de 39€',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Atelier modelage',
    description: 'Modelez la terre à la main et explorez les volumes à votre rythme.',
    duration: '2h30',
    price: 'À partir de 49€',
    image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Atelier privé',
    description: 'Un format sur mesure pour un moment entre proches ou en équipe.',
    duration: 'Sur demande',
    price: 'Devis personnalisé',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=900&q=80',
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

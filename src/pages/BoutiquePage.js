import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import './BoutiquePage.css';

const products = [
  ['Mug Coffee Arts', 'Un mug signature pour vos rituels café.', '24€', 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80'],
  ['Tasse artisanale', 'Une tasse façonnée dans un esprit doux et intemporel.', '29€', 'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=800&q=80'],
  ['Assiette céramique', 'Une pièce simple pour la table du quotidien.', '32€', 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80'],
  ['Café de spécialité', 'Un café sélectionné pour la maison.', '15€', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80'],
  ['Carte cadeau', 'Un moment Coffee Arts à offrir.', 'À partir de 30€', 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80'],
  ['Accessoire café', 'Les essentiels pour préparer un bon café.', '18€', 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80'],
];

function BoutiquePage() {
  return (
    <div className="page boutique-page">
      <PageHero
        eyebrow="Objets choisis"
        title="La boutique"
        subtitle="Des objets choisis avec soin, entre céramique, café et art de vivre."
      />

      <div className="page__content">
        <section className="page-section boutique-products">
          <SectionTitle title="Sélection" text="Céramiques, café et petits objets pour prolonger l’expérience." />
          <div className="product-grid">
            {products.map(([title, description, price, image]) => (
              <article className="product-card soft-card" key={title}>
                <img src={image} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <strong>{price}</strong>
                  <a className="page-button" href="/contact">Voir le produit</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section boutique-cta soft-card">
          <h2>Des pièces uniques disponibles sur place</h2>
          <a className="page-button" href="/contact">Nous contacter</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default BoutiquePage;

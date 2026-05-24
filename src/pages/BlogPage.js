import { motion } from 'framer-motion';
import { containerStagger, fadeUp, fadeUpTransition, viewportOnce } from '../animations';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import './BlogPage.css';

const posts = [
  {
    date: '22 avril 2026',
    title: 'Atelier Tajine en Céramique – Dernières places disponibles !',
    excerpt: 'Un atelier chaleureux pour créer une pièce inspirée des arts de la table et des moments partagés.',
    image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: '18 mars 2026',
    title: 'Iftar at Coffee Arts Paris',
    excerpt: 'Retour sur une soirée gourmande et créative autour du café, de la céramique et de la convivialité.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: '15 février 2026',
    title: 'Retour sur notre Saint-Valentin créative chez Coffee Arts Paris',
    excerpt: 'Une parenthèse douce où chacun a pu peindre, offrir et repartir avec un souvenir unique.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: '09 janvier 2026',
    title: 'Coffee Arts Paris ouvre son café céramique',
    excerpt: 'Découvrez l’esprit du lieu, entre café de spécialité, ateliers créatifs et art de vivre parisien.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
  },
];

function BlogPage() {
  return (
    <div className="page blog-page">
      <PageHero
        eyebrow="Journal"
        title="Le blog"
        subtitle="Actualités, ateliers et inspirations autour du café et de la céramique."
      />

      <div className="page__content blog-page__content">
        <section className="page-section blog-list">
          <motion.div
            className="blog-list__grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {posts.map((post) => (
              <motion.article className="blog-card" key={post.title} variants={fadeUp} transition={fadeUpTransition}>
                <img src={post.image} alt={post.title} />
                <div className="blog-card__body">
                  <time>{post.date}</time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span aria-hidden="true" />
                  <a href="/blog">LIRE</a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default BlogPage;

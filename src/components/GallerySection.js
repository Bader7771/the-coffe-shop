import { motion } from 'framer-motion';
import { containerStagger, fadeUp, fadeUpTransition, viewportOnce } from '../animations';
import './GallerySection.css';

const galleryImages = [
  {
    alt: 'Coffee being poured in a warm cafe',
    src: 'https://i.pinimg.com/736x/01/6f/d0/016fd077d70edcd7477c4ffccd34918f.jpg',
  },
  {
    alt: 'Handmade ceramic cups on a studio shelf',
    src: 'https://i.pinimg.com/1200x/9b/fc/58/9bfc58a123ce406bca503de630a026ef.jpg',
  },
  {
    alt: 'Pottery wheel with clay in a creative studio',
    src: 'https://i.pinimg.com/1200x/22/45/54/22455439db85d704c6b10ccc2fcaa3a4.jpg',
  },
  {
    alt: 'Warm coffee shop table with ceramic cup',
    src: 'https://i.pinimg.com/1200x/ef/3d/9f/ef3d9f3556ff44826b387e2c9f62d7e4.jpg',
  },
  {
    alt: 'Ceramic plates and cups in neutral colors',
    src: 'https://i.pinimg.com/1200x/eb/1a/e6/eb1ae6876104cf38d74a180803f17815.jpg',
  },
  {
    alt: 'Specialty coffee cup close up',
    src: 'https://i.pinimg.com/1200x/68/84/c9/6884c9300fe7bb13452b589761e5177c.jpg',
  },
  {
    alt: 'Hands shaping clay in a pottery workshop',
    src: 'https://i.pinimg.com/736x/fd/8f/fd/fd8ffd0ade8d1b0a761e072bbf46de9c.jpg',
  },
  {
    alt: 'Boutique shelf with ceramic products',
    src: 'https://i.pinimg.com/736x/b8/83/75/b883755d9ea02f8998a165f792a6a7a1.jpg',
  },
];

function GallerySection() {
  return (
    <section className="gallery gallery-section" aria-labelledby="gallery-title">
      <div className="gallery__inner">
        <motion.div
          className="gallery__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <h2 id="gallery-title">Au c&oelig;ur de Coffee Arts Paris</h2>
          <p>
            Des images pour d&eacute;couvrir l&rsquo;ambiance du lieu, ses mati&egrave;res,
            et les instants qui s&rsquo;y vivent au quotidien.
          </p>
        </motion.div>

        <motion.div
          className="gallery__grid"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {galleryImages.map((image) => (
            <motion.figure className="gallery-card" key={image.src} variants={fadeUp} transition={fadeUpTransition}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;

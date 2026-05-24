import './App.css';
import ExperiencesSection from './components/ExperiencesSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import InstagramSection from './components/InstagramSection';

function App() {
  return (
    <main className="app-shell">
      <HeroSection />
      <ExperiencesSection />
      <GallerySection />
      <InstagramSection />
      <Footer />
    </main>
  );
}

export default App;

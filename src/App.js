import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExperiencesSection from './components/ExperiencesSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import InstagramSection from './components/InstagramSection';
import SocialRail from './components/SocialRail';
import BlogPage from './pages/BlogPage';
import BoutiquePage from './pages/BoutiquePage';
import CafePage from './pages/CafePage';
import CeramiquePage from './pages/CeramiquePage';
import ContactPage from './pages/ContactPage';
import EvenementsPage from './pages/EvenementsPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperiencesSection />
      <GallerySection />
      <InstagramSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <SocialRail />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafe" element={<CafePage />} />
          <Route path="/ceramique" element={<CeramiquePage />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/evenements" element={<EvenementsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

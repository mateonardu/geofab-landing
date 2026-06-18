import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

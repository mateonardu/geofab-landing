import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <Catalog />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useState, useEffect } from 'react';
import { marca, logo } from '../config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const waLink = `https://wa.me/${marca.whatsapp}?text=Hola%20${encodeURIComponent(marca.nombre)}%2C%20quiero%20consultar`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-brand-green-dark border-b border-white/10 transition-shadow duration-300 ${scrolled ? 'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]' : ''}`}>

      {/* Logo: absolute, centrado, sobresale por debajo del header */}
      <a href="#" aria-label={logo.alt} className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
        <img
          src={logo.color}
          alt={logo.alt}
          className="h-28 sm:h-48 w-auto object-contain"
        />
      </a>

      {/* Barra: flex justify-between + spacer central */}
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Links izquierda */}
        <nav className="hidden sm:flex items-center gap-7 text-sm font-semibold text-white/75 uppercase tracking-wide">
          <a href="/#catalogo" className="hover:text-brand-yellow transition-colors">Catálogo</a>
          <a href="/#nosotros" className="hover:text-brand-yellow transition-colors">Nosotros</a>
        </nav>
        <div className="sm:hidden" />

        {/* Spacer central */}
        <div className="w-36 sm:w-56 flex-shrink-0" aria-hidden="true" />

        {/* Links derecha + CTA outline */}
        <div className="flex items-center gap-5 sm:gap-6">
          <a
            href="/#contacto"
            className="hidden sm:block text-sm font-semibold text-white/75 uppercase tracking-wide hover:text-brand-yellow transition-colors"
          >
            Contacto
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold border border-white/50 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm hover:bg-white hover:text-brand-green-dark transition-all uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-green-dark"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </header>
  );
}

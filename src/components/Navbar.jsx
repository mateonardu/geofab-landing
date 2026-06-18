import { marca, logo } from '../config/site';

export default function Navbar() {
  const waLink = `https://wa.me/${marca.whatsapp}?text=Hola%20${encodeURIComponent(marca.nombre)}%2C%20quiero%20consultar`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-green/15 shadow-sm">

      {/* Logo: absolute, centrado, cuelga por debajo del header */}
      <a
        href="#"
        aria-label={logo.alt}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-20 pointer-events-auto"
      >
        <img
          src={logo.color}
          alt={logo.alt}
          className="h-24 sm:h-40 w-auto object-contain drop-shadow-lg"
        />
      </a>

      {/* Barra de nav: flex justify-between + spacer central para el logo */}
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Links izquierda */}
        <nav className="hidden sm:flex items-center gap-7 text-sm font-semibold text-brand-text/70 uppercase tracking-wide">
          <a href="#catalogo" className="hover:text-brand-green transition-colors">Catálogo</a>
          <a href="#nosotros" className="hover:text-brand-green transition-colors">Nosotros</a>
        </nav>
        {/* Mobile: div vacío para que justify-between empuje el CTA a la derecha */}
        <div className="sm:hidden" />

        {/* Spacer central — crea el hueco para el logo absoluto */}
        <div className="w-36 sm:w-56 flex-shrink-0" aria-hidden="true" />

        {/* Links derecha + CTA */}
        <div className="flex items-center gap-5 sm:gap-6">
          <a
            href="#contacto"
            className="hidden sm:block text-sm font-semibold text-brand-text/70 uppercase tracking-wide hover:text-brand-green transition-colors"
          >
            Contacto
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold bg-brand-yellow text-brand-green-dark px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm hover:brightness-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 uppercase tracking-wide"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </header>
  );
}

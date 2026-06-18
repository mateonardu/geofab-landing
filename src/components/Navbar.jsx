import { marca } from '../config/site';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-sm border-b border-brand-green/10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-bold text-brand-green-dark text-xl tracking-tight">
          {marca.nombre}
        </span>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-brand-text">
          <a href="#catalogo" className="hover:text-brand-green transition-colors">Catálogo</a>
          <a href="#nosotros" className="hover:text-brand-green transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-brand-green transition-colors">Contacto</a>
        </nav>
        <a
          href={`https://wa.me/${marca.whatsapp}?text=Hola%20${encodeURIComponent(marca.nombre)}%2C%20quiero%20consultar%20sobre%20sus%20productos`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold bg-brand-green text-white px-4 py-2 rounded-full hover:bg-brand-green-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

import { marca, heroImagen } from '../config/site';

export default function Hero() {
  const waLink = `https://wa.me/${marca.whatsapp}?text=Hola%20${encodeURIComponent(marca.nombre)}%2C%20quiero%20consultar%20sobre%20sus%20productos`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-green-dark">
      <div className="relative max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <span className="inline-block font-mono text-brand-yellow text-xs uppercase tracking-widest mb-5 border border-brand-yellow/40 px-3 py-1">
            Tela geotextil técnica
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 uppercase tracking-tight">
            {marca.tagline}
          </h1>
          <p className="text-white/90 text-xl font-medium mb-3">
            {marca.subtitulo}
          </p>
          <p className="text-white/60 text-base mb-10 max-w-md leading-relaxed">
            {marca.descripcion}
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Único CTA amarillo — el acento que tira del ojo */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green-dark font-bold px-7 py-3.5 rounded-sm hover:brightness-95 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-green-dark"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar ahora
            </a>
            {/* Secundario: contorno blanco */}
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-bold px-7 py-3.5 rounded-sm hover:bg-white hover:text-brand-green-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-green-dark"
            >
              Ver catálogo
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src={heroImagen}
              alt="Maceta de tela geotextil GeoFab Argentina"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-brand-green/90 px-5 py-3">
              <p className="font-mono text-brand-yellow text-xs uppercase tracking-widest">Geotextil técnico</p>
              <p className="font-bold text-white text-sm mt-0.5">Poda aérea · Drenaje libre · Mayor productividad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

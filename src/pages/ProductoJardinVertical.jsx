import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos, marca } from '../config/site';
import Footer from '../components/Footer';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const WaIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ProductoJardinVertical() {
  const producto = productos.find(p => p.slug === 'jardin-vertical');
  const [selectedTamano, setSelectedTamano]   = useState(producto.tamanos[0]);
  const [selectedConfig, setSelectedConfig]   = useState(producto.tamanos[0].configuraciones[0]);

  const handleTamano = (tamano) => {
    setSelectedTamano(tamano);
    setSelectedConfig(tamano.configuraciones[0]);
  };

  const waLink = `https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(
    `Hola ${marca.nombre}, me interesa el jardín vertical ${selectedTamano.nombre} ${selectedConfig.nombre}`
  )}`;

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="h-20" />

      {/* ── IMAGEN + INFO ── */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="md:flex md:gap-12 items-start">

          {/* Imagen sticky con breadcrumb */}
          <div className="w-full md:w-1/2 sticky top-20 h-[45vh] md:h-[calc(100vh-5rem)] flex flex-col pt-3 pb-2 md:pt-16 md:pb-6 z-20 bg-white">
            <Link to="/#catalogo" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al catálogo
            </Link>
            <div className="flex-1 flex items-center">
              <div className="w-full aspect-square bg-white overflow-hidden rounded-sm border border-brand-green/20">
                <img
                  key={selectedConfig.imagen}
                  src={selectedConfig.imagen}
                  alt={`Jardín vertical ${selectedTamano.nombre} — ${selectedConfig.nombre}`}
                  className="w-full h-full object-contain animate-fade-in p-2"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 relative z-10 pt-14 pb-8 md:pt-16">
            <span className="font-mono text-brand-green text-xs uppercase tracking-widest mb-2 block">GeoFab · Geotextil</span>
            <h1 className="font-bold text-brand-green-dark text-3xl sm:text-4xl uppercase tracking-tight mb-2">{producto.nombre}</h1>
            <p className="font-mono text-brand-green/80 text-xs uppercase tracking-widest mb-4">{producto.subtitulo}</p>
            <blockquote className="border-l-2 border-brand-yellow pl-4 mb-5">
              <p className="text-brand-green-dark/75 text-sm leading-relaxed italic">{producto.tagline}</p>
            </blockquote>

            {/* Qué incluye — destacado antes del configurador */}
            <div className="mb-6">
              <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-2">Qué incluye</p>
              <ul className="space-y-1.5">
                {producto.queIncluye.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs text-brand-text/65 leading-relaxed">
                    <span className="text-brand-green font-bold text-sm leading-none mt-0.5 flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-brand-green/10 mb-6" />

            {/* Selector tamaño */}
            <div className="mb-5">
              <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-3">
                Tamaño de bolsillo — <span className="text-brand-green-dark font-bold">{selectedTamano.medidaBolsillo}</span>
              </p>
              <div className="flex rounded-sm border border-brand-green/20 w-fit overflow-hidden">
                {producto.tamanos.map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleTamano(t)}
                    className={`font-mono text-sm font-semibold px-5 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-yellow ${
                      selectedTamano.id === t.id
                        ? 'bg-brand-green-dark text-white'
                        : 'text-brand-green-dark hover:bg-brand-green/5'
                    }`}
                  >
                    {t.nombre}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector configuración */}
            <div className="mb-5">
              <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-3">
                Configuración — <span className="text-brand-green-dark font-bold">{selectedConfig.nombre}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedTamano.configuraciones.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedConfig(c)}
                    className={`font-mono text-sm px-4 py-2 rounded-sm border transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-1 ${
                      selectedConfig.id === c.id
                        ? 'bg-brand-green-dark text-white border-brand-green-dark'
                        : 'border-brand-green/25 text-brand-green-dark hover:border-brand-green hover:bg-brand-green/5'
                    }`}
                  >
                    {c.nombre}
                  </button>
                ))}
              </div>
            </div>

            {/* Medidas resultantes */}
            <div className="bg-brand-cream/30 rounded-sm p-4 mb-6">
              <div className="flex gap-8 flex-wrap">
                <div>
                  <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-1">Bolsillo</p>
                  <p className="font-mono font-bold text-brand-green-dark text-lg">{selectedTamano.medidaBolsillo}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-1">Cubre pared</p>
                  <p className="font-mono font-bold text-brand-green-dark text-lg">{selectedConfig.medidasCubre}</p>
                </div>
              </div>
              <p className="font-mono text-xs text-brand-text/40 mt-3">
                También disponible en Panel 1 m² · Los módulos son combinables entre sí.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <span className="font-mono font-bold text-brand-green-dark text-xl">{producto.precio}</span>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green-dark font-bold px-6 py-3 rounded-sm hover:brightness-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
              >
                <WaIcon />
                Consultar {selectedTamano.nombre} · {selectedConfig.nombre}
              </a>
            </div>

            {/* Ficha técnica */}
            <div>
              <h2 className="font-mono text-xs text-brand-green uppercase tracking-widest mb-3">Ficha técnica</h2>
              <div className="border border-brand-green/10 rounded-sm overflow-hidden">
                {producto.fichaTecnica.map((f, i) => (
                  <div key={f.clave} className={`flex gap-4 px-4 py-2.5 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream/30'}`}>
                    <span className="font-mono text-brand-text/50 text-xs w-36 flex-shrink-0 leading-relaxed pt-0.5">{f.clave}</span>
                    <span className="font-mono text-brand-green-dark text-xs leading-relaxed">{f.valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TAMAÑOS DE BOLSILLO ── */}
      <div className="bg-brand-cream/30 py-14 px-4 mt-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-brand-green-dark text-xl uppercase tracking-tight mb-6 text-center">
            Tres tamaños de bolsillo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {producto.tamanos.map(t => (
              <div
                key={t.id}
                onClick={() => handleTamano(t)}
                className={`border rounded-sm p-5 cursor-pointer transition-all ${
                  selectedTamano.id === t.id
                    ? 'border-brand-green-dark bg-white shadow-sm'
                    : 'border-brand-green/15 bg-white hover:border-brand-green/40'
                }`}
              >
                <p className="font-bold text-brand-green-dark uppercase tracking-wide mb-1">{t.nombre}</p>
                <p className="font-mono text-brand-green text-xs mb-2">{t.medidaBolsillo}</p>
                <p className="text-brand-text/60 text-sm">{t.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── POR QUÉ ELEGIR ── */}
      <div className="bg-brand-green-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-white text-xl sm:text-2xl uppercase tracking-tight mb-10 text-center">
            {producto.razonesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {producto.razones.map((r, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckIcon />
                <div>
                  <h3 className="font-bold text-white text-sm mb-1 uppercase tracking-wide">{r.titulo}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{r.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green-dark font-bold px-8 py-4 rounded-sm hover:brightness-95 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-green-dark"
            >
              <WaIcon />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-brand-green-dark text-xl uppercase tracking-tight mb-6">
            Qué incluye
          </h2>
          <ul className="space-y-3">
            {producto.queIncluye.map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-brand-text/70 leading-relaxed">
                <span className="text-brand-green font-bold text-base leading-none mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

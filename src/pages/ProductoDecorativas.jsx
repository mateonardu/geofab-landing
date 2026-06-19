import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos, marca } from '../config/site';
import Footer from '../components/Footer';

const WaIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function DecoCard({ item }) {
  const [version, setVersion] = useState('clara');
  const [varianteIdx, setVarianteIdx] = useState(0);

  const imagen   = version === 'clara' ? item.imagenClara : item.imagenOscura;
  const variante = item.variantes ? item.variantes[varianteIdx] : null;
  const medidas  = variante ? variante.medidas : item.medidas;

  const waText = variante
    ? `Hola ${marca.nombre}, me interesa la ${item.nombre} de ${variante.tamano} en versión ${version}`
    : `Hola ${marca.nombre}, me interesa la ${item.nombre} en versión ${version}`;
  const waLink = `https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(waText)}`;

  return (
    <article className="bg-white border border-brand-green/10 rounded-sm overflow-hidden flex flex-col hover:shadow-md hover:border-brand-green/25 transition-all duration-200">

      {/* Imagen */}
      <div className="aspect-[4/3] bg-white overflow-hidden border border-brand-green/20">
        {imagen ? (
          <img
            key={imagen}
            src={imagen}
            alt={`${item.nombre}${variante ? ` ${variante.tamano}` : ''} — ${version}`}
            className="w-full h-full object-contain animate-fade-in p-4"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-xs text-brand-green/25 uppercase text-center px-2">{item.nombre}</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-bold text-brand-green-dark text-sm uppercase tracking-wide leading-tight">
          {item.nombre}
        </h3>
        {medidas && (
          <p className="font-mono text-xs text-brand-green/70">{medidas}</p>
        )}

        {/* Selector de tamaño (solo si tiene variantes) */}
        {item.variantes && (
          <div className="flex gap-1.5 flex-wrap">
            {item.variantes.map((v, i) => (
              <button
                key={v.tamano}
                onClick={() => setVarianteIdx(i)}
                className={`font-mono text-xs px-2.5 py-1 rounded-sm border transition-all focus:outline-none focus:ring-1 focus:ring-brand-yellow ${
                  varianteIdx === i
                    ? 'bg-brand-green-dark text-white border-brand-green-dark'
                    : 'border-brand-green/25 text-brand-green-dark hover:border-brand-green hover:bg-brand-green/5'
                }`}
              >
                {v.tamano}
              </button>
            ))}
          </div>
        )}

        {/* Toggle clara / oscura */}
        <div className="flex gap-1.5">
          {['clara', 'oscura'].map(v => (
            <button
              key={v}
              onClick={() => setVersion(v)}
              className={`font-mono text-xs px-2.5 py-1 rounded-sm border capitalize transition-all focus:outline-none focus:ring-1 focus:ring-brand-yellow ${
                version === v
                  ? 'bg-brand-green-dark text-white border-brand-green-dark'
                  : 'border-brand-green/25 text-brand-green-dark hover:border-brand-green hover:bg-brand-green/5'
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* WA */}
        <div className="mt-auto pt-3 border-t border-brand-green/10">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-green text-white text-xs font-bold px-3 py-2 rounded-sm uppercase tracking-wide hover:bg-brand-green-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-1 w-full justify-center"
            aria-label={`Consultar ${item.nombre} por WhatsApp`}
          >
            <WaIcon /> Consultar
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductoDecorativas() {
  const producto = productos.find(p => p.slug === 'macetas-decorativas');

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="h-20" />

      {/* Encabezado */}
      <div className="max-w-5xl mx-auto px-4 pt-14 pb-8 md:pt-16">
        <Link
          to="/#catalogo"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors mb-6 block"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al catálogo
        </Link>

        <span className="font-mono text-brand-green text-xs uppercase tracking-widest mb-2 block">
          GeoFab · Geotextil
        </span>
        <h1 className="font-bold text-brand-green-dark text-3xl sm:text-4xl uppercase tracking-tight mb-2">
          {producto.nombre}
        </h1>
        <p className="font-mono text-brand-green/80 text-xs uppercase tracking-widest mb-4">
          Autoarmables · Fieltro y Geotextil · 300 G/M²
        </p>
        <blockquote className="border-l-2 border-brand-yellow pl-4">
          <p className="text-brand-green-dark/75 text-sm leading-relaxed italic">
            {producto.descripcion}
          </p>
        </blockquote>
      </div>

      {/* Familias */}
      <div className="max-w-5xl mx-auto px-4 pb-16 space-y-14">
        {producto.familias.map((familia) => (
          <section key={familia.nombre}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h2 className="font-bold text-brand-green-dark text-xl uppercase tracking-tight">
                {familia.nombre}
              </h2>
              <span className="font-mono text-xs bg-brand-yellow text-brand-green-dark font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide">
                Autoarmable
              </span>
              <span className="font-mono text-xs border border-brand-green/30 text-brand-green px-2.5 py-1 rounded-sm">
                {familia.material}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {familia.items.map(item => (
                <DecoCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}

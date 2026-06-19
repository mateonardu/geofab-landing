import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos, marca } from '../config/site';
import Footer from '../components/Footer';

const DEFAULT_LITROS = 10;

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ProductoMacetas() {
  const producto = productos.find(p => p.slug === 'macetas-geotextiles');
  const defaultVariante = producto.variantes.find(v => v.litros === DEFAULT_LITROS);
  const [selected, setSelected] = useState(defaultVariante);

  const waText = encodeURIComponent(
    `Hola ${marca.nombre}, me interesa la maceta geotextil de ${selected.litros} L`
  );
  const waLink = `https://wa.me/${marca.whatsapp}?text=${waText}`;

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="h-20" />

      {/* ── SECCIÓN PRINCIPAL: imagen estática + info scrollable ── */}
      <div className="max-w-5xl mx-auto px-4">

        <div className="md:flex md:gap-12 items-start">

          {/* Imagen: panel fijo con breadcrumb arriba */}
          <div className="w-full md:w-1/2 md:sticky md:top-20 md:h-[calc(100vh-5rem)] flex flex-col pt-14 pb-8 md:pt-16 md:pb-6">
            <Link
              to="/#catalogo"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al catálogo
            </Link>
            <div className="flex-1 flex items-center">
              <div className="w-full aspect-square bg-white overflow-hidden border border-brand-green/20">
                <img
                  key={selected.imagen}
                  src={selected.imagen}
                  alt={`${producto.nombre} — ${selected.litros} L`}
                  className="w-full h-full object-contain animate-fade-in"
                />
              </div>
            </div>
            <p className="font-mono text-xs text-brand-text/40 text-center mt-3">
              Gramaje {producto.gramaje} en todas las medidas
            </p>
          </div>

        {/* Info scrollable */}
        <div className="w-full md:w-1/2 relative z-10 pt-14 pb-8 md:pt-16">
          <span className="font-mono text-brand-green text-xs uppercase tracking-widest mb-3 block">
            GeoFab · Geotextil
          </span>
          <h1 className="font-bold text-brand-green-dark text-3xl sm:text-4xl uppercase tracking-tight mb-4">
            {producto.nombre}
          </h1>

          {/* Atributos */}
          <div className="flex flex-wrap gap-2 mb-3">
            {producto.atributos.map(a => (
              <span
                key={a}
                className="font-mono text-xs border border-brand-green/30 text-brand-green px-2.5 py-1 rounded-sm"
              >
                {a}
              </span>
            ))}
          </div>

          {/* Características */}
          <div className="flex flex-wrap gap-2 mb-5">
            {producto.caracteristicas.map(c => (
              <span
                key={c}
                className="font-mono text-xs bg-brand-green-dark/5 text-brand-text/60 px-2.5 py-1 rounded-sm"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <blockquote className="border-l-2 border-brand-yellow pl-4 mb-6">
            <p className="text-brand-green-dark/80 text-sm leading-relaxed italic">
              {producto.tagline}
            </p>
          </blockquote>

          <div className="border-t border-brand-green/10 mb-6" />

          {/* Selector de litros */}
          <div className="mb-5">
            <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-3">
              Capacidad — <span className="text-brand-green-dark font-bold">{selected.litros} L</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {producto.variantes.map(v => (
                <button
                  key={v.litros}
                  onClick={() => setSelected(v)}
                  className={`font-mono text-sm px-3 py-1.5 rounded-sm border transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-1 ${
                    selected.litros === v.litros
                      ? 'bg-brand-green-dark text-white border-brand-green-dark'
                      : 'border-brand-green/25 text-brand-green-dark hover:border-brand-green hover:bg-brand-green/5'
                  }`}
                >
                  {v.litros} L
                </button>
              ))}
            </div>
          </div>

          {/* Medidas seleccionadas */}
          <div className="mb-5">
            <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-1">
              Medidas (Ø × alto)
            </p>
            <p className="font-mono font-bold text-brand-green-dark text-xl">
              {selected.medidas}
            </p>
          </div>

          {/* Precio */}
          <div className="mb-7">
            <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-1">
              Precio
            </p>
            <p className="font-mono font-bold text-brand-green-dark text-2xl">
              {selected.precio}
            </p>
          </div>

          {/* CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green-dark font-bold px-8 py-4 rounded-sm hover:brightness-95 transition-all w-full sm:w-auto justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
          >
            {WA_ICON}
            Consultar {selected.litros} L por WhatsApp
          </a>
        </div>
        </div>{/* fin md:flex */}
      </div>{/* fin max-w-5xl */}

      {/* ── TABLA DE MEDIDAS ── */}
      <div className="bg-brand-cream/30 py-16 px-4 mt-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-brand-green-dark text-xl uppercase tracking-tight mb-5">
            Tabla de medidas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Tabla */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto rounded-sm border border-brand-green/10">
                <table className="w-full text-sm min-w-[280px]">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="text-left px-4 py-3 font-semibold font-mono uppercase tracking-wide text-xs">Litros</th>
                      <th className="text-left px-4 py-3 font-semibold font-mono uppercase tracking-wide text-xs">Ø × Alto</th>
                      <th className="text-left px-4 py-3 font-semibold font-mono uppercase tracking-wide text-xs">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {producto.variantes.map((v, i) => (
                      <tr
                        key={v.litros}
                        onClick={() => setSelected(v)}
                        className={`cursor-pointer transition-colors ${
                          selected.litros === v.litros
                            ? 'bg-brand-yellow/20 font-semibold'
                            : i % 2 === 0
                              ? 'bg-white hover:bg-brand-green/5'
                              : 'bg-brand-cream/40 hover:bg-brand-green/5'
                        }`}
                      >
                        <td className="px-4 py-2.5 font-mono text-brand-green-dark font-medium">{v.litros} L</td>
                        <td className="px-4 py-2.5 font-mono text-brand-text/70">{v.medidas}</td>
                        <td className="px-4 py-2.5 font-mono text-brand-text/50 text-xs">{v.precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-mono text-xs text-brand-text/40 mt-2">
                * Clic en una fila para ver la imagen correspondiente.
              </p>
            </div>

            {/* Gramaje card — alineado con la tabla, no con el título */}
            <div className="bg-brand-green-dark text-white rounded-sm p-5">
              <p className="font-mono text-brand-yellow text-xs uppercase tracking-widest mb-1">
                Gramaje
              </p>
              <p className="font-bold text-2xl">{producto.gramaje}</p>
              <p className="text-white/60 text-xs mt-1">En todas las medidas</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── 5 RAZONES ── */}
      <div className="bg-brand-green-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-white text-2xl sm:text-3xl uppercase tracking-tight mb-10 text-center">
            5 razones para elegir maceta geotextil GeoFab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {producto.razones.map((r, i) => (
              <div key={i} className="flex gap-4 items-start">
                <svg
                  className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1 uppercase tracking-wide">
                    {r.titulo}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {r.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de cierre */}
          <div className="text-center mt-12">
            <a
              href={`https://wa.me/${marca.whatsapp}?text=${encodeURIComponent(`Hola ${marca.nombre}, quiero consultar sobre las macetas geotextiles`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-green-dark font-bold px-8 py-4 rounded-sm hover:brightness-95 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-green-dark"
            >
              {WA_ICON}
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

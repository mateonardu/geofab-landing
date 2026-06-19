import { Link } from 'react-router-dom';
import { productos, marca } from '../config/site';
import { useInView } from '../hooks/useInView';

function ProductPlaceholder({ nombre }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-brand-green-dark/5">
      <svg className="w-10 h-10 text-brand-green/25" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 0v9m0 0c-1.5-2-4-3-6-2m6 2c1.5-2 4-3 6-2" />
      </svg>
      <span className="font-mono text-xs text-brand-green-dark/30 uppercase tracking-wide text-center px-4 leading-snug">
        {nombre}
      </span>
    </div>
  );
}

function ProductCard({ producto, loneInRow }) {
  const { ref, inView } = useInView();
  const waText = encodeURIComponent(`Hola ${marca.nombre}, me interesa: ${producto.nombre}`);
  const waLink = `https://wa.me/${marca.whatsapp}?text=${waText}`;
  const hasPage = !!producto.slug;

  return (
    <article
      ref={ref}
      className={`relative bg-white border border-brand-green/10 rounded-sm overflow-hidden transition-all duration-300 flex flex-col group ${inView ? 'animate-fade-up' : 'opacity-0'} ${loneInRow ? 'lg:col-start-2' : ''} ${hasPage ? 'hover:shadow-md hover:border-brand-green/30 cursor-pointer' : 'hover:shadow-md hover:border-brand-green/30'}`}
      style={{ animationDelay: `${(producto.id - 1) % 3 * 100}ms` }}
    >
      {/* Stretched link — cubre toda la tarjeta para productos con página propia */}
      {hasPage && (
        <Link
          to={`/producto/${producto.slug}`}
          className="absolute inset-0 z-0 rounded-sm"
          aria-label={`Ver página de ${producto.nombre}`}
          tabIndex={-1}
        />
      )}

      {/* Imagen */}
      <div className="aspect-square overflow-hidden">
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <ProductPlaceholder nombre={producto.nombre} />
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-brand-green-dark text-base uppercase tracking-wide mb-2">
          {producto.nombre}
        </h3>
        <p className="text-brand-text/60 text-sm flex-1 mb-4 leading-relaxed">
          {producto.descripcion}
        </p>
        <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-brand-green/10 relative z-10">
          {hasPage ? (
            <>
              <Link
                to={`/producto/${producto.slug}`}
                className="text-sm font-semibold text-brand-green-dark hover:text-brand-green transition-colors uppercase tracking-wide"
              >
                Ver producto →
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-sm uppercase tracking-wide hover:bg-brand-green-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
                aria-label={`Consultar por WhatsApp sobre ${producto.nombre}`}
                onClick={e => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar
              </a>
            </>
          ) : (
            <>
              <span className="font-mono font-medium text-brand-green-dark text-sm">
                {producto.precio}
              </span>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-sm uppercase tracking-wide hover:bg-brand-green-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
                aria-label={`Consultar por WhatsApp sobre ${producto.nombre}`}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Catalog() {
  const loneLastItem = productos.length % 3 === 1;

  return (
    <section id="catalogo" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-brand-green text-xs uppercase tracking-widest mb-3">
            Productos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-green-dark uppercase tracking-tight">
            Catálogo
          </h2>
          <p className="text-brand-text/60 mt-3 max-w-md mx-auto text-sm">
            Todos los productos disponibles para envío. Consultanos por volumen o pedidos a medida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productos.map((p, i) => (
            <ProductCard
              key={p.id}
              producto={p}
              loneInRow={loneLastItem && i === productos.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

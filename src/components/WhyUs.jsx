import { diferenciales } from '../config/site';
import { useInView } from '../hooks/useInView';

const ICONS = {
  raices: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11 mx-auto mb-5 text-brand-yellow" aria-hidden="true">
      {/* Tallo central */}
      <line x1="12" y1="2" x2="12" y2="9" />
      {/* Hoja en la punta */}
      <path d="M12 2C12 2 9 0.5 9 3.5C9 5.5 12 5 12 2Z" fill="currentColor" strokeWidth="0" />
      {/* Bifurcación principal */}
      <path d="M12 9L7 15" />
      <path d="M12 9L17 15" />
      {/* Ramificaciones secundarias — las puntas podadas */}
      <path d="M7 15L4.5 20" />
      <path d="M7 15L9.5 20" />
      <path d="M17 15L14.5 20" />
      <path d="M17 15L19.5 20" />
      {/* Puntos en las puntas (poda aérea) */}
      <circle cx="4.5" cy="20" r="1" fill="currentColor" strokeWidth="0" />
      <circle cx="9.5" cy="20" r="1" fill="currentColor" strokeWidth="0" />
      <circle cx="14.5" cy="20" r="1" fill="currentColor" strokeWidth="0" />
      <circle cx="19.5" cy="20" r="1" fill="currentColor" strokeWidth="0" />
    </svg>
  ),
  drenaje: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11 mx-auto mb-5 text-brand-yellow" aria-hidden="true">
      {/* Escudo */}
      <path d="M12 2L4 5.5V11C4 15.8 7.4 20.3 12 22C16.6 20.3 20 15.8 20 11V5.5L12 2Z" />
      {/* Check dentro del escudo */}
      <polyline points="9 12 11 14.5 15.5 9.5" />
    </svg>
  ),
  crecimiento: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11 mx-auto mb-5 text-brand-yellow" aria-hidden="true">
      {/* Tres barras ascendentes */}
      <rect x="2" y="15" width="5" height="7" rx="0.5" />
      <rect x="9.5" y="9" width="5" height="13" rx="0.5" />
      <rect x="17" y="3" width="5" height="19" rx="0.5" />
      {/* Línea de tendencia */}
      <path d="M4.5 14.5L12 8.5L19.5 2.5" strokeDasharray="1.5 1.5" strokeWidth="1" />
    </svg>
  ),
};

export default function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 px-4 bg-brand-green-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-brand-yellow text-xs uppercase tracking-widest mb-3">
            Diferenciales técnicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            ¿Por qué GeoFab?
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {diferenciales.map((d, i) => (
            <div
              key={i}
              className={`bg-white/8 border border-white/10 rounded-sm p-8 text-center hover:bg-white/12 transition-colors ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {ICONS[d.icono] ?? null}
              <h3 className="font-bold text-white text-lg uppercase tracking-wide mb-3">{d.titulo}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { diferenciales } from '../config/site';
import { useInView } from '../hooks/useInView';

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
              <span className="text-4xl mb-4 block" role="img" aria-label={d.titulo}>
                {d.icono}
              </span>
              <h3 className="font-bold text-white text-lg uppercase tracking-wide mb-3">{d.titulo}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

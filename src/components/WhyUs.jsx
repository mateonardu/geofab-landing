import { diferenciales } from '../config/site';
import { useInView } from '../hooks/useInView';

export default function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 px-4 bg-brand-green-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-yellow font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros diferenciales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            ¿Por qué elegir GeoFab?
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {diferenciales.map((d, i) => (
            <div
              key={i}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="text-5xl mb-4 block" role="img" aria-label={d.titulo}>
                {d.icono}
              </span>
              <h3 className="font-bold text-white text-xl mb-3">{d.titulo}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

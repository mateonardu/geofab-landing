import { testimonios } from '../config/site';
import { useInView } from '../hooks/useInView';

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-brand-yellow' : 'text-brand-text/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 px-4 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-green-dark">Testimonios</h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <blockquote
              key={i}
              className={`bg-white rounded-sm p-7 flex flex-col gap-4 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Stars count={t.estrellas} />
              <p className="text-brand-text/80 text-sm leading-relaxed flex-1">
                "{t.texto}"
              </p>
              <footer className="font-semibold text-brand-green-dark text-sm">
                — {t.nombre}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

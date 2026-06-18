import { sobre } from '../config/site';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="nosotros" className="py-20 px-4 bg-brand-bg">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          ref={ref}
          className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src={sobre.imagen}
              alt={sobre.nombreFoto}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-yellow/30 rounded-full blur-2xl" aria-hidden="true" />
        </div>

        {/* Text */}
        <div className={`${inView ? 'animate-fade-up [animation-delay:200ms]' : 'opacity-0'}`}>
          <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-widest mb-4">
            Sobre nosotros
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-green-dark mb-6">
            Amor por las plantas, trabajo con las manos
          </h2>
          <p className="text-brand-text/70 text-lg leading-relaxed">
            {sobre.historia}
          </p>
        </div>
      </div>
    </section>
  );
}

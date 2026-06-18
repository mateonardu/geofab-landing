import { sobre } from '../config/site';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="nosotros" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          ref={ref}
          className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="rounded-sm overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src={sobre.imagen}
              alt={sobre.nombreFoto}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className={`${inView ? 'animate-fade-up [animation-delay:200ms]' : 'opacity-0'}`}>
          <span className="inline-block font-mono text-brand-green text-xs uppercase tracking-widest mb-4">
            Sobre GeoFab
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-green-dark uppercase tracking-tight mb-6">
            {sobre.titulo}
          </h2>
          <p className="text-brand-text/70 text-base leading-relaxed">
            {sobre.historia}
          </p>
        </div>
      </div>
    </section>
  );
}

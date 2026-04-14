import { Link } from 'react-router-dom'
import type { ServiceData } from '../../data/serviceData'

interface Props {
  service: ServiceData
}

export default function SubServiceHeroSection({ service }: Props) {
  const titleLines = service.headline.split('\n')

  return (
    <>
      {/* Desktop hero */}
      <section className="hidden md:flex relative w-full overflow-hidden bg-primary-container min-h-[500px] items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <nav className="flex mb-8 space-x-2 text-sm font-medium text-on-primary-container/80 tracking-wide uppercase">
            <Link to="/" className="hover:text-white transition-colors">
              Početna
            </Link>
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
            <Link to="/usluge" className="hover:text-white transition-colors">
              Usluge
            </Link>
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
            <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter font-headline">
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <a
            href="tel:0917346442"
            className="bg-secondary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all transform active:scale-95 shadow-lg inline-block font-headline"
          >
            Dogovorite termin
          </a>
        </div>
      </section>

      {/* Mobile hero */}
      <section className="md:hidden px-6 py-12 pt-28 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[0.75rem] font-bold tracking-wider uppercase font-label rounded">
              {service.categoryLabel}
            </span>
            <h1 className="font-headline text-5xl font-extrabold text-primary leading-[1.1] tracking-tighter">
              {service.title}
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              Vraćamo vašu opremu u pogon istog dana. Profesionalna dijagnostika
              i originalni rezervni dijelovi uz jamstvo na obavljeni rad.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  )
}

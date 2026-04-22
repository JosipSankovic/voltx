// Brands / partner logos strip — desktop only (not in mobile design)
// Shows grayscale logos that animate to color on hover

const authorizedBrands = [
  { name: 'Hobart', url: 'https://www.hobart.de' },
  { name: 'Electrolux', url: 'https://www.electroluxprofessional.com' },
  { name: 'Unox', url: 'https://www.unox.com' },
  { name: 'Arris', url: 'https://www.arrisce.it/en/' },
  { name: 'Gazi', url: 'https://www.gazi.si/' },
  { name: 'Fagor', url: 'https://www.fagorindustrial.com' },
  { name: 'Baron', url: 'https://www.baronworld.com' },
]

const additionalBrands = [
  { name: 'Winterhalter', url: 'https://www.winterhalter.com' },
  { name: 'Rational', url: 'https://www.rational-online.com' },
]

function BrandLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      className="font-headline font-black text-xl text-slate-700 dark:text-slate-300 tracking-tight hover:text-secondary transition-colors"
    >
      {name}
    </a>
  )
}

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-outline-variant/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Authorized service */}
        <div>
          <p className="text-center text-xs font-label font-bold text-outline uppercase tracking-[0.3em] mb-8">
            Ovlašteni servis
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {authorizedBrands.map((brand) => (
              <div key={brand.name} className="h-8 flex items-center">
                <BrandLink name={brand.name} url={brand.url} />
              </div>
            ))}
          </div>
        </div>

        {/* Also repairs */}
        <div>
          <p className="text-center text-xs font-label font-bold text-outline uppercase tracking-[0.3em] mb-8">
            Popravljamo i
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500">
            {additionalBrands.map((brand) => (
              <div key={brand.name} className="h-8 flex items-center">
                <BrandLink name={brand.name} url={brand.url} />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-outline/60 mt-6">
            i ostale marke ugostiteljske i kućanske opreme
          </p>
        </div>
      </div>
    </section>
  )
}

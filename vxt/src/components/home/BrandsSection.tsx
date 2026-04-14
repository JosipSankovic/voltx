// Brands / partner logos strip — desktop only (not in mobile design)
// Shows grayscale logos that animate to color on hover

const brands = [
  { name: 'Rational', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rational_AG_logo.svg/320px-Rational_AG_logo.svg.png' },
  { name: 'Electrolux Professional', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Electrolux_logo.svg/320px-Electrolux_logo.svg.png' },
  { name: 'Hobart', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hobart_Corporation_logo.svg/320px-Hobart_Corporation_logo.svg.png' },
  { name: 'Winterhalter', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Winterhalter_logo.svg/320px-Winterhalter_logo.svg.png' },
  { name: 'Meiko', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Meiko_Logo.svg/320px-Meiko_Logo.svg.png' },
]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-label font-bold text-outline uppercase tracking-[0.3em] mb-12">
          Ovlašteni servis za vodeće svjetske brendove
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand.name} className="h-8 flex items-center">
              {/* Fallback text logo if image fails */}
              <span
                className="font-headline font-black text-xl text-slate-700 tracking-tight"
                title={brand.name}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServiceHubHeroSection() {
  return (
    <>
      {/* Desktop hero: dark image overlay */}
      <header className="hidden md:block relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
            alt="Ugostiteljska oprema"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-surface-container-highest text-sm font-medium tracking-wide">
            <a href="/" className="hover:text-white transition-colors">
              Početna
            </a>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-white">Usluge</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Servis ugostiteljske opreme
            </h1>
            <p className="text-xl text-surface-container-highest mb-10 max-w-xl font-light leading-relaxed">
              Osiguravamo neprekidan rad vaše kuhinje uz profesionalno
              održavanje i hitne popravke industrijskih sustava.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center px-10 py-5 bg-secondary-container text-white font-headline font-bold text-lg rounded-md shadow-[0_20px_40px_rgba(171,53,0,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Zatražite ponudu
            </a>
          </div>
        </div>
      </header>

      {/* Mobile hero: gradient + wide image */}
      <section className="md:hidden relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #000F22 0%, #0A2540 100%)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-6 inline-block bg-secondary px-4 py-1 rounded-full text-white font-label text-[10px] uppercase tracking-[0.2em] font-bold">
            Profesionalni Servis 24/7
          </div>
          <h1 className="font-headline text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl">
            Servis ugostiteljske opreme
          </h1>
          <p className="text-on-primary-container text-lg max-w-2xl mb-12 font-light">
            Vaša kuhinja ne smije stati. Osiguravamo vrhunsku tehničku podršku i
            brze popravke za sve vrste ugostiteljskih uređaja uz garanciju
            kvalitete.
          </p>
          <a
            href="tel:0917346442"
            className="bg-secondary-container text-white px-10 py-5 rounded-lg font-headline font-bold text-lg text-center hover:bg-secondary transition-colors shadow-lg"
          >
            Zatražite intervenciju
          </a>
        </div>
        <div className="mt-16 w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl relative aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
            alt="Ugostiteljska kuhinja"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </section>
    </>
  )
}

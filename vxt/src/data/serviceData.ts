export interface Problem {
  icon: string
  title: string
  desc: string
}

export interface ServiceData {
  slug: string
  title: string
  categoryLabel: string
  headline: string
  heroImage: string
  introHeading: string
  introText: string[]
  whyItems: string[]
  problems: Problem[]
  ctaTitle: string
  ctaText: string
}

const services: ServiceData[] = [
  {
    slug: 'rashladni-sustavi',
    title: 'Servis rashladnih sustava',
    categoryLabel: 'Rashladna tehnika',
    headline: 'Servis rashladnih\nsustava',
    heroImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&q=80',
    introHeading: 'Stručni servis za sve rashladne uređaje',
    introText: [
      'Rashladna tehnika je srce svake profesionalne kuhinje i rashladnog lanca. Volt X pruža kompletan servis hladnjaka, zamrzivača, rashladnih vitrina, ledomata i rashladnih komora.',
      'Naši ovlašteni tehničari posjeduju certifikate za rukovanje rashladnim plinovima i dijagnostiku modernih frekventnih pogona. Jamčimo brz dolazak i trajno rješenje.',
    ],
    whyItems: [
      'Dolazak na vašu adresu u najkraćem roku.',
      'Ovlašteni servis za punjenje rashladnih plinova.',
      'Jamstvo na sve izvršene radove i ugrađene dijelove.',
    ],
    problems: [
      { icon: 'thermostat', title: 'Ne hladi dovoljno', desc: 'Nedostatak plina, prljavi kondenzator ili kvar kompresora.' },
      { icon: 'water_drop', title: 'Curenje vode', desc: 'Začepljena cijev za odvod kondenzata ili kvar brtve.' },
      { icon: 'volume_up', title: 'Glasno radi', desc: 'Istrošeni ležajevi ventilatora ili labavi dijelovi.' },
      { icon: 'error', title: 'Greška na displeju', desc: 'Kvar senzora temperature ili upravljačke elektronike.' },
    ],
    ctaTitle: 'Kvar na rashladnom uređaju?',
    ctaText: 'Kontaktirajte nas odmah i osigurajte sigurnost vaših namirnica.',
  },
  {
    slug: 'termicka-oprema',
    title: 'Servis termičke opreme',
    categoryLabel: 'Termička oprema',
    headline: 'Servis termičke\nopreme',
    heroImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80',
    introHeading: 'Precizni popravci za pećnice i roštiljeve',
    introText: [
      'Termička oprema mora raditi besprijekorno u svakom trenutku. Volt X servisira sve vrste konvekcijskih pećnica, konvektomata, pizza peći, štednjaka i industrijskih friteza.',
      'Naš tim je specijaliziran za dijagnostiku i zamjenu grijaćih tijela, termostata, ventilacijskih sustava i upravljačke elektronike.',
    ],
    whyItems: [
      'Brza dijagnostika na licu mjesta.',
      'Originalni rezervni dijelovi za sve marke.',
      'Pisano jamstvo na obavljeni servis.',
    ],
    problems: [
      { icon: 'thermostat', title: 'Ne postiže temperaturu', desc: 'Kvar grijača, termostata ili temperaturnog senzora.' },
      { icon: 'settings', title: 'Elektronika ne reagira', desc: 'Problem s upravljačkom pločom ili tipkama.' },
      { icon: 'air', title: 'Neravnomjerno pečenje', desc: 'Kvar ventilatora ili problem s cirkulacijom zraka.' },
      { icon: 'error', title: 'Greška na zaslonu', desc: 'Dijagnostika i zamjena upravljačkih modula.' },
    ],
    ctaTitle: 'Problemi s pećnicom ili fritezom?',
    ctaText: 'Nazovite nas odmah — svaki sat zastoja košta.',
  },
  {
    slug: 'perilice-posuda',
    title: 'Servis perilica posuđa',
    categoryLabel: 'Perilice posuđa',
    headline: 'Servis perilica\nposuđa',
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80',
    introHeading: 'Čisto posuđe, zadovoljni gosti',
    introText: [
      'Profesionalne perilice čaša, tanjura i crnog posuđa zahtijevaju redovito održavanje. Volt X servisira sve tipove perilica od jednostavnih modela do tunelskih industrijskih sustava.',
      'Vršimo ugradnju i zamjenu dozatora deterdženta i sjajila, odčepljavanje, čišćenje kamenca te popravak elektronike i upravljačkih ploča.',
    ],
    whyItems: [
      'Servis perilica Meiko, Winterhalter, Hobart i dr.',
      'Usluga na terenu bez potrebe za odvozom uređaja.',
      'Brza dostava rezervnih dijelova.',
    ],
    problems: [
      { icon: 'water_drop', title: 'Ne puni se vodom', desc: 'Kvar ventila za punjenje ili senzora razine.' },
      { icon: 'thermostat', title: 'Voda nije dovoljno vruća', desc: 'Problem s grijačem ili termostatom.' },
      { icon: 'settings', title: 'Greška na upravljačkoj ploči', desc: 'Elektroničke smetnje ili kvar modula.' },
      { icon: 'error', title: 'Posuđe nije čisto', desc: 'Lošt tlak pranja, dozer deterdženta ili kamenac.' },
    ],
    ctaTitle: 'Perilica posuđa stala?',
    ctaText: 'Brz servis sprječava zastoj u radu kuhinje.',
  },
  {
    slug: 'rezervni-dijelovi',
    title: 'Rezervni dijelovi',
    categoryLabel: 'Rezervni dijelovi',
    headline: 'Originalni\nrezervi dijelovi',
    heroImage: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1600&q=80',
    introHeading: 'Originalni dijelovi za trajnu kvalitetu',
    introText: [
      'Volt X održava bogato skladište originalnih rezervnih dijelova za sve vrste ugostiteljske i kućanske opreme. Brza dostava i ugradnja znači minimalan zastoj u radu.',
      'Naši tehničari donose potrebne dijelove direktno na terenu, a za složenije nabave osiguravamo brzu narudžbu od ovlaštenih distributera.',
    ],
    whyItems: [
      'Samo originalni ili certificirani OEM dijelovi.',
      'Skladište najčešće korištenih komponenti.',
      'Ugradnja istog dana za standardne kvarove.',
    ],
    problems: [
      { icon: 'thermostat', title: 'Grijači i termostati', desc: 'Zamjena grijaćih tijela i termostata svih vrsta.' },
      { icon: 'water_drop', title: 'Pumpe i ventili', desc: 'Odvodne i cirkulacijske pumpe te elektromagnetski ventili.' },
      { icon: 'settings', title: 'Elektronički moduli', desc: 'Upravljačke ploče, ekrani i senzori.' },
      { icon: 'build', title: 'Mehanički dijelovi', desc: 'Ležajevi, remeni, amortizeri i brtve.' },
    ],
    ctaTitle: 'Trebate rezervni dio?',
    ctaText: 'Upitajte za dostupnost — odgovaramo odmah.',
  },
  {
    slug: 'preventivno-odrzavanje',
    title: 'Preventivno održavanje',
    categoryLabel: 'Preventiva',
    headline: 'Preventivno\nodržavanje opreme',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
    introHeading: 'Spriječite kvarove prije nego nastupe',
    introText: [
      'Redovito preventivno održavanje produljuje životni vijek vaše opreme, smanjuje troškove popravaka i osigurava nesmetano poslovanje.',
      'Volt X nudi ugovore o redovitom servisiranju s dogovorenim terminima dolazaka, zamjenom trošnih dijelova i dokumentacijom svakog pregleda.',
    ],
    whyItems: [
      'Personalizirani plan održavanja za vaš objekt.',
      'Prioritetni dolazak kod hitnih kvarova.',
      'Popust na rezervne dijelove za ugovorne klijente.',
    ],
    problems: [
      { icon: 'calendar_today', title: 'Redoviti pregledi', desc: 'Kvartalni ili polugodinji pregledi svih uređaja.' },
      { icon: 'cleaning_services', title: 'Čišćenje i kalibracija', desc: 'Čišćenje kondenzatora, izmjenjivača i filtera.' },
      { icon: 'build', title: 'Zamjena trošnih dijelova', desc: 'Proaktivna zamjena brtvi, remena i ležajeva.' },
      { icon: 'description', title: 'Servisna dokumentacija', desc: 'Detaljan izvještaj o svakom pregledu i intervenciji.' },
    ],
    ctaTitle: 'Zainteresirani za ugovor o održavanju?',
    ctaText: 'Kontaktirajte nas za individualni plan i cijenu.',
  },
  // Household appliance sub-services
  {
    slug: 'perilice-rublja',
    title: 'Servis perilica rublja',
    categoryLabel: 'Servis kućanskih aparata',
    headline: 'Servis perilica\nrublja',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    introHeading: 'Vrhunska podrška za Vaš dom',
    introText: [
      'Kada vaša perilica rublja prestane raditi, svakodnevni život postaje kompliciran. U Volt X-u razumijemo hitnost situacije. Pružamo profesionalnu uslugu dijagnostike i popravka svih vrsta i marki perilica rublja, koristeći isključivo originalne rezervne dijelove.',
      'Naši stručnjaci posjeduju dugogodišnje iskustvo s brendovima kao što su Bosch, Samsung, Gorenje, Whirlpool i mnogi drugi. Jamčimo preciznost i dugotrajno rješenje vaših problema.',
    ],
    whyItems: [
      'Dolazak na vašu adresu u najkraćem roku.',
      'Transparentne cijene bez skrivenih troškova.',
      'Jamstvo na sve izvršene radove i ugrađene dijelove.',
    ],
    problems: [
      { icon: 'thermostat', title: 'Ne grije vodu', desc: 'Najčešći uzrok je neispravan grijač ili termostat.' },
      { icon: 'water_drop', title: 'Ne izbacuje vodu', desc: 'Problem s odvodnom pumpom ili začepljenim filterom.' },
      { icon: 'volume_up', title: 'Glasan rad', desc: 'Ukazuje na istrošene ležajeve ili amortizere.' },
      { icon: 'hardware', title: 'Buba lupa (Centrifuga)', desc: 'Neravnoteža bubnja ili problemi s motorom.' },
      { icon: 'settings', title: 'Ne pokreće program', desc: 'Elektronički kvarovi ili problem s bravicom vrata.' },
      { icon: 'flash_on', title: 'Nema napajanja', desc: 'Kvar na elektronici ili mrežnom kabelu.' },
    ],
    ctaTitle: 'Pokvarila vam se perilica?',
    ctaText: 'Nazovite nas odmah i vratite se svojoj rutini bez stresa.',
  },
]

export function getServiceData(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServices(): ServiceData[] {
  return services
}

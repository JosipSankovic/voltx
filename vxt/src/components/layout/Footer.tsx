import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 max-w-7xl mx-auto">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Volt X" className="h-8 w-auto mb-4" />
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            Profesionalni servis ugostiteljske opreme i kućanskih aparata na
            području Zadra i okolice.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col space-y-3">
          <span className="text-white font-bold mb-2 text-sm font-headline uppercase tracking-wider">
            Brzi Linkovi
          </span>
          <Link
            to="/"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Početna
          </Link>
          <Link
            to="/usluge"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Usluge
          </Link>
          <Link
            to="/o-nama"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            O nama
          </Link>
          <Link
            to="/kontakt"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Kontakt
          </Link>
        </div>

        {/* Services */}
        <div className="flex flex-col space-y-3">
          <span className="text-white font-bold mb-2 text-sm font-headline uppercase tracking-wider">
            Usluge
          </span>
          <Link
            to="/usluge"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Prodaja opreme
          </Link>
          <Link
            to="/usluge"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Servis i popravak
          </Link>
          <Link
            to="/usluge"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Montaža sustava
          </Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-3">
          <span className="text-white font-bold mb-2 text-sm font-headline uppercase tracking-wider">
            Pravno
          </span>
          <Link
            to="/privatnost"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Pravila privatnosti
          </Link>
          <Link
            to="/uvjeti"
            className="text-slate-400 hover:text-white transition-colors font-body text-sm"
          >
            Uvjeti poslovanja
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-16 pt-8">
        <p className="text-slate-400 font-body text-sm text-center">
          © 2024 Volt X. Sva prava pridržana.
        </p>
      </div>
    </footer>
  )
}

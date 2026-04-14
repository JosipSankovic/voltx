import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Početna', end: true },
  { to: '/usluge', label: 'Usluge', end: false },
  { to: '/o-nama', label: 'O nama', end: true },
  { to: '/kontakt', label: 'Kontakt', end: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo_2.png" alt="" className="h-8 w-auto" />
          <span className="text-2xl font-black text-slate-900 tracking-tighter font-headline">
            Volt X
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-600 font-bold border-b-2 border-orange-600 font-headline text-base tracking-tight'
                  : 'text-slate-700 hover:text-orange-600 transition-colors duration-200 font-headline font-bold text-base tracking-tight'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Mobile trigger */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA button */}
          <a
            href="tel:0917346442"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-container text-white rounded-lg font-headline font-bold transition-transform active:scale-90 hover:brightness-110"
          >
            <span className="material-symbols-outlined text-sm leading-none">call</span>
            091 734 6442
          </a>

          {/* Mobile: phone number text (from mobile design) */}
          <div className="flex md:hidden items-center gap-2">
            <span className="material-symbols-outlined text-slate-900 text-xl leading-none">call</span>
            <span className="font-headline font-bold text-slate-900 text-sm">091 734 6442</span>
          </div>

          {/* Hamburger (optional – design shows it but mobile design uses sticky CTA) */}
          <button
            className="md:hidden text-primary ml-1"
            aria-label="Otvori izbornik"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-600 font-bold font-headline text-base'
                  : 'text-slate-700 font-bold font-headline text-base'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

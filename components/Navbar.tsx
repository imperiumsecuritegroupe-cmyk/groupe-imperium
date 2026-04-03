'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#histoire', label: 'Notre Histoire' },
  { href: '#filiales', label: 'Nos Filiales' },
  { href: '#valeurs', label: 'Nos Valeurs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 120) {
          current = sec.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">
            GROUPE <strong>IMPERIUM</strong>
          </span>
        </div>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                style={{ color: activeSection === href.slice(1) ? 'var(--gold)' : '' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            style={
              menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}
            }
          />
          <span style={menuOpen ? { opacity: '0' } : {}} />
          <span
            style={
              menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}
            }
          />
        </button>
      </div>
    </nav>
  )
}

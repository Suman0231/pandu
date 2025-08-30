import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'गृहपृष्ठ', en: 'Home' },
  { to: '/about', label: 'परिचय', en: 'About' },
  { to: '/services', label: 'सेवाहरू', en: 'Services' },
  { to: '/gallery', label: 'ग्यालेरी', en: 'Gallery' },
  { to: '/testimonials', label: 'आशीर्वचन', en: 'Testimonials' },
  { to: '/blog', label: 'लेख', en: 'Blog' },
  { to: '/contact', label: 'सम्पर्क', en: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-primary-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-primary-700 hover:scale-105 transition-transform duration-300">
          <img src="/om.svg" className="w-8 h-8 animate-pulse-slow" alt="ॐ" />
          <span>सहदेब अधिकारी</span>
        </Link>

        <button className="md:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors duration-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({isActive}) =>
                  `px-3 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-white bg-primary-600 shadow-lg' : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'}`
                }>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="tel:+977 9860384392"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={16} /> Call
            </a>
          </li>
        </ul>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary-100 bg-white animate-fadeInUp">
          <ul className="px-4 py-2 space-y-1">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({isActive}) =>
                    `block px-3 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-primary-50 hover:translate-x-2'}`
                  }>
                  {l.label} <span className="text-xs text-gray-500 ml-1">({l.en})</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

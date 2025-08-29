import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-saffron-700 text-black mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/om.svg" className="w-8 h-8" alt="ॐ" />
            <div className="font-bold text-lg">पं. राजेश शर्मा</div>
          </div>
          <p className="text-primary-100 leading-relaxed">
            वैदिक परम्पराअनुसार शुद्ध र विधिपूर्वक अनुष्ठान। गृहप्रवेश, विवाह संस्कार, श्राद्ध, हवन, कथा, तथा अनलाइन पूजा सेवाहरू।
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-primary-100">
            <li className="flex items-center gap-2"><Phone size={16}/> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16}/> pandit@example.com</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Your City, India</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Book a Puja</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-primary-100">
        With <Heart size={14} className="inline-block -mt-0.5"/> by tradition • © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

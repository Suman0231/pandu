import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-white mt-12 animate-fadeInUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div className="animate-fadeInLeft">
          <div className="flex items-center gap-2 mb-3">
            <img src="/om.svg" className="w-8 h-8 animate-pulse-slow" alt="ॐ" />
            <div className="font-bold text-lg">सहदेब अधिकारी</div>
          </div>
          <p className="text-blue-100 leading-relaxed">
            वैदिक परम्पराअनुसार शुद्ध र विधिपूर्वक अनुष्ठान। गृहप्रवेश, विवाह संस्कार, श्राद्ध, हवन, कथा, तथा अनलाइन पूजा सेवाहरू।
          </p>
        </div>

        <div className="animate-fadeInUp delay-200">
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-blue-100">
            <li className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300"><Phone size={16} className="hover:animate-pulse"/> +977 9860384392</li>
            <li className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300"><Mail size={16} className="hover:animate-pulse"/> adhikarisahadev0@gmail.com</li>
            <li className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300"><MapPin size={16} className="hover:animate-pulse"/> Chapagaun, Lalitpur</li>
          </ul>
        </div>

        <div className="animate-fadeInRight delay-300">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="text-blue-100 hover:text-white hover:underline hover:translate-x-2 transition-all duration-300">Services</Link></li>
            <li><Link to="/gallery" className="text-blue-100 hover:text-white hover:underline hover:translate-x-2 transition-all duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="text-blue-100 hover:text-white hover:underline hover:translate-x-2 transition-all duration-300">Book a Puja</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-blue-100 animate-fadeInUp delay-500">
        With <Heart size={14} className="inline-block -mt-0.5 animate-pulse text-red-400"/> by tradition • © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

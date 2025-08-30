import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ServiceCard, { Service } from '../components/ServiceCard'
import TestimonialCard, { Testimonial } from '../components/TestimonialCard'
import BlogCard, { BlogItem } from '../components/BlogCard'
import { Calendar, Users, Star } from 'lucide-react'

const services: Service[] = [
  { key: 'griha-pravesh', name: 'Griha Pravesh', hindi: 'गृह प्रवेश', description: 'नयाँ घर/कार्यालयमा प्रवेश गर्नु अघि विधिपूर्वक पूजा।', duration: '२-३ घण्टा', includes: ['संकल्प', 'हवन', 'वास्तु शान्ति'], price: 'On request' },
  { key: 'satyanarayan', name: 'Satyanarayan Katha', hindi: 'सत्यनारायण कथा', description: 'सौभाग्य, समृद्धि र शान्तिका लागि।', duration: '२ घण्टा', price: 'On request' },
  { key: 'rudrabhishek', name: 'Rudrabhishek', hindi: 'रुद्राभिषेक', description: 'भगवान शिवको विशेष पूजा र अभिषेक।', duration: '१-२ घण्टा', price: 'On request' }
]

const testimonials: Testimonial[] = [
  { name: 'Sharma Family', location: 'Lalitpur', message: 'विधिपूर्वक पूजा र सरल मार्गदर्शन—पूर्ण रूपमा सन्तुष्ट!', rating: 5 },
  { name: 'Aashutosh', location: 'Bhaktapur', message: 'समयमै, अनुशासित र परम्परागत तरिकाले अनुष्ठान।', rating: 5 }
]

const blogs: BlogItem[] = [
  { title: 'गृह प्रवेश कहिले र कसरी गर्ने?', excerpt: 'शास्त्रअनुसार सही मुहूर्त र आवश्यक सामग्री...', href: '#' },
  { title: 'वास्तु शान्तिको महत्व', excerpt: 'घरमा शान्ति र सकारात्मक ऊर्जाका लागि...', href: '#' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>पण्डित जी | गृह प्रवेश • कथाहरू • हवन</title>
      </Helmet>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeInLeft">
            <div className="text-primary-700 shloka text-xl animate-pulse-slow">"ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै।"</div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold gradient-text animate-fadeInUp delay-200">वैदिक पुरोहित • ५+ वर्षको अनुभव</h1>
            <p className="mt-4 text-gray-700 animate-fadeInUp delay-300">परम्परागत विधिबाट सबै कर्मकाण्ड — पूजा, हवन, संस्कार, तथा अनलाइन सेवाहरू।</p>
            <div className="mt-6 flex gap-4 animate-fadeInUp delay-400">
              <Link to="/services" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow">सेवाहरू हेर्नुहोस्</Link>
              <Link to="/contact" className="bg-primary-100 text-primary-700 px-6 py-3 rounded-lg hover:bg-primary-200 hover:scale-105 transition-all duration-300 border border-primary-200 hover:border-primary-300">बुकिङ गर्नुहोस्</Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center animate-fadeInUp delay-500">
              <div className="p-4 bg-primary-50 rounded-xl hover-lift hover:bg-primary-100 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">वर्ष</div>
              </div>
              <div className="p-4 bg-primary-50 rounded-xl hover-lift hover:bg-primary-100 transition-all duration-300 delay-100">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">परिवार</div>
              </div>
              <div className="p-4 bg-primary-50 rounded-xl hover-lift hover:bg-primary-100 transition-all duration-300 delay-200">
                <div className="text-2xl font-bold text-gray-900">13+</div>
                <div className="text-sm text-gray-600">अनुष्ठान</div>
              </div>
            </div>
          </div>

         <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInRight animate-float">
  <img
    src="/paandu.jpg"
    alt="पण्डितजीको फोटो"
    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
  />
</div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fadeInUp">प्रमुख सेवाहरू</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInUp delay-200">
          {services.map((s, i) => <ServiceCard key={s.key} service={s} index={i} />)}
        </div>
        <div className="mt-6 animate-fadeInUp delay-400">
          <Link to="/services" className="text-primary-700 hover:underline">सबै सेवाहरू हेर्नुहोस् →</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fadeInUp">आशीर्वचन</h2>
          <div className="grid md:grid-cols-2 gap-6 animate-fadeInUp delay-200">
            {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fadeInUp">लेखहरू</h2>
        <div className="grid md:grid-cols-2 gap-6 animate-fadeInUp delay-200">
          {blogs.map((b, i) => <BlogCard key={i} item={b} index={i} />)}
        </div>
      </section>
    </>
  )
}

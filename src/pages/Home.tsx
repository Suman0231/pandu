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
  { name: 'Sharma Family', location: 'Mumbai', message: 'विधिपूर्वक पूजा र सरल मार्गदर्शन—पूर्ण रूपमा सन्तुष्ट!', rating: 5 },
  { name: 'Verma Ji', location: 'Delhi', message: 'समयमै, अनुशासित र परम्परागत तरिकाले अनुष्ठान।', rating: 5 }
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
          <div>
            <div className="text-primary-700 shloka text-xl">“ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै।”</div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">वैदिक पुरोहित • 5+ वर्षको अनुभव</h1>
            <p className="mt-4 text-gray-700">परम्परागत विधिबाट सबै कर्मकाण्ड — पूजा, हवन, संस्कार, तथा अनलाइन सेवाहरू।</p>
            <div className="mt-6 flex gap-4">
              <Link to="/services" className="bg-primary-600 text-white px-5 py-3 rounded-lg">सेवाहरू हेर्नुहोस्</Link>
              <Link to="/contact" className="bg-primary-100 text-primary-700 px-5 py-3 rounded-lg">बुकिङ गर्नुहोस्</Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-primary-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">वर्ष</div>
              </div>
              <div className="p-4 bg-primary-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">परिवार</div>
              </div>
             
              </div>
            </div>
          </div>

         <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/paandu.jpg"
    alt="पण्डितजीको फोटो"
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">प्रमुख सेवाहरू</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => <ServiceCard key={s.key} service={s} />)}
        </div>
        <div className="mt-6">
          <Link to="/services" className="text-primary-700 hover:underline">सबै सेवाहरू हेर्नुहोस् →</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">आशीर्वचन</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">लेखहरू</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((b, i) => <BlogCard key={i} item={b} />)}
        </div>
      </section>
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import TestimonialCard, { Testimonial } from '../components/TestimonialCard'

const list: Testimonial[] = [
  { name:'Rajani Khadka', location:'Lalitpur', message:'गृहप्रवेश पूजन अत्यन्त शुद्ध र विधिपूर्वक सम्पन्न भयो।', rating:5 },
  { name:'Shankhar Subedi', location:'Lalitpur', message:'सम्पूर्ण संस्कार परम्परागत रूपमा सम्पन्न।', rating:5 },
  { name:'Rohit Shrestha', location:'Kathmandu', message:'समयको पालना र सजिलो बुझाइ।', rating:4 }
]

export default function Testimonials() {
  return (
    <>
      <Helmet><title>आशीर्वचन</title></Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeInUp gradient-text">आशीर्वचन</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>
      </div>
    </>
  )
}

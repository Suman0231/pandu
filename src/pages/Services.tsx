import { Helmet } from 'react-helmet-async'
import ServiceCard, { Service } from '../components/ServiceCard'

const allServices: Service[] = [
  { key:'griha-pravesh', name:'Griha Pravesh', hindi:'गृह प्रवेश', description:'नयाँ घर/अफिसमा प्रवेश गर्न शुभ मुहूर्तमा पूजा।', duration:'२-३ घण्टा', includes:['संकल्प','हवन','वास्तु शान्ति'] },
  { key:'vastu-shanti', name:'Vastu Shanti', hindi:'वास्तु शांति', description:'वास्तु दोष निवारण तथा शान्ति पाठ।', duration:'२ घण्टा' },
  { key:'satyanarayan-katha', name:'Satyanarayan Katha', hindi:'सत्यनारायण कथा', description:'सौभाग्य र समृद्धिका लागि।', duration:'२ घण्टा' },
  { key:'rudrabhishek', name:'Rudrabhishek', hindi:'रुद्राभिषेक', description:'भगवान शिवको विशेष अभिषेक।', duration:'१-२ घण्टा' },
  { key:'vivah-sanskar', name:'Vivah Sanskar', hindi:'विवाह संस्कार', description:'वैदिक विधिबाट विवाह संस्कार।', duration:'मुहूर्त अनुसार' },
  { key:'pind-daan', name:'Pind Daan / Shraddh', hindi:'पिंड दान / श्राद्ध', description:'पूर्वजहरूको तर्पण तथा श्राद्ध कर्म।', duration:'१-२ घण्टा' },
  { key:'online-puja', name:'Online Puja', hindi:'ऑनलाइन पूजा', description:'Zoom/Meet मा सम्पूर्ण विधिपूर्वक पूजा।', duration:'अनुकूल', includes:['सामग्री सूची','मन्त्र-पाठ', 'दिशानिर्देश'] }
]

export default function Services() {
  return (
    <>
      <Helmet><title>सेवाहरू</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeInUp gradient-text">सेवाहरू</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s, i) => <ServiceCard key={s.key} service={s} index={i} />)}
        </div>
      </div>
    </>
  )
}

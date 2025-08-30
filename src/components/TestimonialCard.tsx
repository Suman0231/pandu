export interface Testimonial {
  name: string
  relation?: string
  message: string
  date?: string
  location?: string
  rating?: number
}

export default function TestimonialCard({ t, index = 0 }: { t: Testimonial; index?: number }) {
  return (
    <div className={`bg-white p-6 rounded-2xl border border-primary-100 shadow-sm hover:shadow-lg hover-lift animate-fadeInUp delay-${index * 200 + 100} group`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
          <span className="group-hover:animate-pulse">ॐ</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{t.name}</div>
          <div className="text-xs text-gray-500">{t.location}</div>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">"{t.message}"</p>
      {t.rating && (
        <div className="mt-2 text-yellow-500 group-hover:scale-110 transition-transform duration-300" aria-label={`Rated ${t.rating} out of 5`}>
          {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
        </div>
      )}
    </div>
  )
}

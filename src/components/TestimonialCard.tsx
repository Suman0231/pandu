export interface Testimonial {
  name: string
  relation?: string
  message: string
  date?: string
  location?: string
  rating?: number
}

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">ॐ</div>
        <div>
          <div className="font-semibold text-gray-900">{t.name}</div>
          <div className="text-xs text-gray-500">{t.location}</div>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">“{t.message}”</p>
      {t.rating && (
        <div className="mt-2 text-yellow-500" aria-label={`Rated ${t.rating} out of 5`}>
          {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
        </div>
      )}
    </div>
  )
}

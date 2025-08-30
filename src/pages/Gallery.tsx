import { Helmet } from 'react-helmet-async'

export default function Gallery() {
  const items = Array.from({ length: 20 }).map((_, i) => i + 1)

  return (
    <>
      <Helmet><title>गैलरी</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeInUp gradient-text">गैलरी</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeInUp delay-200">
          {items.map(i => (
            <div key={i} className={`aspect-square bg-primary-100 rounded-xl overflow-hidden hover-lift animate-fadeInUp delay-${(i % 6) * 100 + 100} group`}>
              <img
                src={`/images/${i}.jpg`}
                alt={`Gallery Image ${i}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

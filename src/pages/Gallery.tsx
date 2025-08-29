import { Helmet } from 'react-helmet-async'

export default function Gallery() {
  const items = Array.from({length: 9}).map((_,i) => i+1)
  return (
    <>
      <Helmet><title>गैलरी</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">गैलरी</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(i => (
            <div key={i} className="aspect-square bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 text-4xl">ॐ</div>
          ))}
        </div>
      </div>
    </>
  )
}

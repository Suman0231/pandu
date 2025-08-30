export interface BlogItem {
  title: string
  excerpt: string
  href: string
  date?: string
}

export default function BlogCard({ item, index = 0 }: { item: BlogItem; index?: number }) {
  return (
    <a href={item.href} className={`block bg-white rounded-2xl border border-primary-100 p-6 hover:shadow-lg hover-lift animate-fadeInUp delay-${index * 200 + 100} group`}>
      <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{item.title}</h3>
      <p className="text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-300">{item.excerpt}</p>
      {item.date && <div className="text-xs text-gray-500 mt-3">{item.date}</div>}
      <div className="mt-4 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        पढ्नुहोस् →
      </div>
    </a>
  )
}

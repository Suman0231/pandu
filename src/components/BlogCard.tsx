export interface BlogItem {
  title: string
  excerpt: string
  href: string
  date?: string
}

export default function BlogCard({ item }: { item: BlogItem }) {
  return (
    <a href={item.href} className="block bg-white rounded-2xl border border-primary-100 p-6 hover:shadow-md transition">
      <h3 className="font-semibold text-gray-900">{item.title}</h3>
      <p className="text-gray-700 mt-2">{item.excerpt}</p>
      {item.date && <div className="text-xs text-gray-500 mt-3">{item.date}</div>}
    </a>
  )
}

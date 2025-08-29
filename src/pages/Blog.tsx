import { Helmet } from 'react-helmet-async'
import BlogCard, { BlogItem } from '../components/BlogCard'

const posts: BlogItem[] = [
  { title:'मासिक पंचाङ्ग (उदाहरण)', excerpt:'तिथि, नक्षत्र र मुहूर्त सङ्केत...', href:'#', date:'2025-08-01' },
  { title:'पूजाको तयारी कसरी गर्ने?', excerpt:'सामग्री सूची, स्थान, दिशा र शुद्धि...', href:'#', date:'2025-07-12' },
  { title:'श्राद्ध कर्मको महत्व', excerpt:'पितृहरूप्रति कृतज्ञता र विधिपूर्वक कार्य...', href:'#', date:'2025-06-30' }
]

export default function Blog() {
  return (
    <>
      <Helmet><title>लेखहरू</title></Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">लेखहरू</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p,i) => <BlogCard key={i} item={p} />)}
        </div>
      </div>
    </>
  )
}

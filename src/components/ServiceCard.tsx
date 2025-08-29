import { Clock, IndianRupee, CheckCircle } from 'lucide-react'

export interface Service {
  key: string
  name: string
  hindi: string
  description: string
  duration?: string
  price?: string
  includes?: string[]
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 border border-primary-100">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{service.hindi}</h3>
          <div className="text-sm text-gray-500">{service.name}</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <span className="text-primary-700 font-bold">ॐ</span>
        </div>
      </div>
      <p className="text-gray-700 mt-3">{service.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
        {service.duration && <div className="flex items-center gap-2"><Clock size={16}/> {service.duration}</div>}
        {service.price && <div className="flex items-center gap-2"><IndianRupee size={16}/> {service.price}</div>}
      </div>
      {service.includes && service.includes.length > 0 && (
        <ul className="mt-4 space-y-1">
          {service.includes.map((it, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={16} className="text-green-600"/> {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

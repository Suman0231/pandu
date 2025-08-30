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

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <div className={`bg-white rounded-2xl shadow hover:shadow-lg hover-lift p-6 border border-primary-100 animate-fadeInUp delay-${index * 100 + 100} group`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{service.hindi}</h3>
          <div className="text-sm text-gray-500">{service.name}</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
          <span className="text-primary-700 font-bold group-hover:animate-pulse">ॐ</span>
        </div>
      </div>
      <p className="text-gray-700 mt-3 group-hover:text-gray-900 transition-colors duration-300">{service.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
        {service.duration && <div className="flex items-center gap-2 group-hover:text-primary-600 transition-colors duration-300"><Clock size={16} className="group-hover:animate-pulse"/> {service.duration}</div>}
        {service.price && <div className="flex items-center gap-2 group-hover:text-primary-600 transition-colors duration-300"><span>रु</span> {service.price}
</div>}
      </div>
      {service.includes && service.includes.length > 0 && (
        <ul className="mt-4 space-y-1">
          {service.includes.map((it, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              <CheckCircle size={16} className="text-green-600 group-hover:scale-110 transition-transform duration-300"/> {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

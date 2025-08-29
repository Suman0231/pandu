import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [msg, setMsg] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `नमस्ते पण्डित जी,%0A%0Aनाम: ${name}%0Aफोन: ${phone}%0Aसेवा: ${service}%0Aतिथि: ${date}%0Aसन्देश: ${msg}`
    )
    window.open(`https://wa.me/9779860384392?text=${text}`, '_blank')
  }

  return (
    <>
      <Helmet><title>सम्पर्क</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">सम्पर्क तथा बुकिङ</h1>

        <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 border border-primary-100 space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">नाम</label>
            <input value={name} onChange={e=>setName(e.target.value)} required className="w-full rounded-lg border-gray-300" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">फोन</label>
            <input value={phone} onChange={e=>setPhone(e.target.value)} required className="w-full rounded-lg border-gray-300" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">सेवा</label>
              <input value={service} onChange={e=>setService(e.target.value)} className="w-full rounded-lg border-gray-300" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">तिथि</label>
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full rounded-lg border-gray-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">सन्देश</label>
            <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={4} className="w-full rounded-lg border-gray-300" />
          </div>

          <div className="flex gap-3">
            <button className="bg-primary-600 text-white px-5 py-3 rounded-lg" type="submit">WhatsApp बाट पठाउनुहोस्</button>
            <a className="px-5 py-3 rounded-lg border border-primary-200" href="mailto:adhikarisahadev0@gmail.com">Email</a>
          </div>
        </form>

        <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden border border-primary-100">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  )
}

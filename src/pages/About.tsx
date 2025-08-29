import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet><title>परिचय • About</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">परिचय</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          गुरुकुल परम्परामा संस्कृत र वेदको अध्ययन। अनुभवी आचार्यहरूको मार्गदर्शनमा यजुर्वेद, संहिता, ब्राह्मण र गृहसूत्रहरूको विशेष अध्ययन।
          गृहस्थ र समुदायका लागि शुद्ध र विधिपूर्वक कर्मकाण्डको सम्पादन।
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-xl border border-primary-100">
            <div className="text-sm text-gray-500">Languages</div>
            <div className="font-semibold text-gray-900">Nepali • Sanskrit • English</div>
          </div>
         
        </div>
      </div>
    </>
  )
}

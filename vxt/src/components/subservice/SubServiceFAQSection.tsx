import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import type { ServiceData } from '../../data/serviceData'

interface Props {
  service: ServiceData
}

export default function SubServiceFAQSection({ service }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!service.faqs || service.faqs.length === 0) return null

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <section className="py-24 bg-surface-container-low px-6">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-headline font-bold text-primary mb-12">
          Često postavljana pitanja
        </h2>
        <div className="space-y-3">
          {service.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl overflow-hidden border border-outline-variant"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left font-headline font-semibold text-on-surface hover:bg-surface-container transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span
                  className="material-symbols-outlined text-secondary ml-4 flex-shrink-0 transition-transform"
                  style={{
                    transform:
                      openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  expand_more
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

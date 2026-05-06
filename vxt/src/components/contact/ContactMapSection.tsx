export default function ContactMapSection() {
  const lat = 44.18756720
  const lng = 15.1602560

  return (
    <section className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
      <iframe
        title="Volt X lokacija na karti"
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 left-3 z-20 bg-white text-black px-4 py-2 rounded-md shadow-md text-sm font-medium"
      >
        Open in Google Maps
      </a>
    </section>
  )
}
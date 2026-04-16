export default function ContactMapSection() {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
      <iframe
        title="Volt X lokacija na karti"
        src="https://maps.google.com/maps?q=Petr%C4%8Dane+Ulica+XI%2F1,+23231&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}

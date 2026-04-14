export default function ContactMapSection() {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
      <iframe
        title="Volt X lokacija"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45445.78!2d15.2314!3d44.1194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761f50043fdf947%3A0x2cf2f6e449218025!2sZadar!5e0!3m2!1shr!2shr!4v1"
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

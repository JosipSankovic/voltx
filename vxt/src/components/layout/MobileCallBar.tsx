export default function MobileCallBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] rounded-xl z-50 md:hidden bg-orange-600 shadow-[0_20px_40px_rgba(171,53,0,0.3)] overflow-hidden">
      <a
        href="tel:0917346442"
        className="flex items-center justify-center space-x-2 py-4 text-white font-headline font-bold uppercase tracking-wider text-sm active:bg-orange-500 transition-colors"
      >
        <span className="material-symbols-outlined leading-none">call</span>
        <span>Nazovite 091 734 6442</span>
      </a>
    </div>
  )
}

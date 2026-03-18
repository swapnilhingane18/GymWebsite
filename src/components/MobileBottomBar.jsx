import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-dark/90 backdrop-blur-xl border-t border-white/[0.06] shadow-[0_-4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-2 px-3 py-2.5 max-w-lg mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919730091331?text=Hi,%20I%20want%20to%20join%20Royal%20Fitness%20Gym"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white font-bold text-[12px] uppercase tracking-wider rounded-xl active:scale-[0.96] transition-transform"
          >
            <FaWhatsapp className="text-base" />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+919730091331"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/[0.06] border border-white/10 text-white font-bold text-[12px] uppercase tracking-wider rounded-xl active:scale-[0.96] transition-transform"
          >
            <FaPhoneAlt className="text-xs" />
            Call Now
          </a>

          {/* Join Now */}
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-accent to-red-800 text-white font-bold text-[12px] uppercase tracking-wider rounded-xl active:scale-[0.96] transition-transform shadow-lg shadow-accent/20"
          >
            Join Now
          </a>
        </div>
      </div>
      {/* Safe area spacer for phones with bottom bars */}
      <div className="bg-dark/90 h-[env(safe-area-inset-bottom,0px)]" />
    </div>
  )
}

import { FaDumbbell, FaCarrot, FaUserTie, FaCertificate } from 'react-icons/fa'

const features = [
    { icon: FaCertificate, text: 'Certified Trainers' },
    { icon: FaDumbbell, text: 'Modern Equipment' },
    { icon: FaUserTie, text: 'Personal Training' },
    { icon: FaCarrot, text: 'Diet Guidance' },
]

export default function TrustBar() {
    return (
        <section className="bg-gradient-to-b from-[#141414] to-dark border-y border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8 min-h-[100px] flex items-center">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-hidden lg:divide-x divide-white/10">
                    {features.map((f, i) => {
                        const Icon = f.icon
                        return (
                            <div key={i} className="flex items-center gap-3 sm:gap-4 lg:justify-center px-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 text-accent">
                                    <Icon className="text-lg sm:text-xl" />
                                </div>
                                <span className="font-montserrat font-bold text-xs sm:text-[13px] text-white tracking-wide leading-tight">
                                    {f.text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

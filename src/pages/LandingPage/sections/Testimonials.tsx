import { useRef } from "react";

const testimonials = [
  {
    text: `"I've always wanted to learn how to become a mechanic, but finding a program that accommodates accessibility was a challenge. SkillUP-Africa made it possible. With a skill, my path feels brighter, and I have a new direction to embark on a real career. My mentor was supportive, kind, and all resources, even the online ones, were accessible. I'm proud of the progress I've made!"`,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex",
    title: "Mobility Challenged",
  },
  {
    text: `"Vocational training has always seemed out of reach for me due to my unique challenges. This platform made things so much easier. The lessons are engaging, the instructors are understanding, and the support is amazing. Now, I feel more confident about entering the workforce. I finally feel confident about making a future for myself!"`,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah",
    title: "Autism Spectrum Disorder",
  },
  {
    text: `"As someone who is deaf, vocational classrooms have often left me feeling excluded, especially without access to sign language support. SkillUP-Africa changed that. The online resources are accessible, and the mentors are patient and understanding. I'm excited to use my new skills to start a business and inspire others in my community!"`,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Clare",
    title: "Deaf",
  },
];

const Testimonials = () => {
  // Duplicate testimonials for seamless looping
  const cards = [...testimonials, ...testimonials];
  const containerRef = useRef(null);
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-gray-800 mb-8 sm:mb-12 md:mb-16">
          What Students Say
        </header>
        
        <div className="relative w-full overflow-hidden">
          <div 
            ref={containerRef}
            className="flex gap-4 md:gap-6 lg:gap-8 py-4 animate-scroll-testimonials hover:[animation-play-state:paused]"
          >
            {cards.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between flex-shrink-0 h-auto min-h-[280px] sm:min-h-[320px]"
                style={{
                  width: 'calc(100vw - 4rem)',
                  maxWidth: '420px',
                  scrollSnapAlign: 'center',
                }}
              >
                <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700 flex-grow">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll-testimonials {
          display: flex;
          width: max-content;
          animation: scroll-testimonials 30s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll-testimonials {
            animation-duration: 40s;
          }
        }
        @media (min-width: 1024px) {
          .animate-scroll-testimonials {
            animation-duration: 50s;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

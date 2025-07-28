import { useState, useEffect } from "react";
import { HeroBackground, Hero1 } from "../../../assets/Images";

const dataPoints = [
  {
    color: "#F69B0A",
    title: "Data Point",
    text: "According to the Kenya National Bureau of Statistics (K.N.B.S), the 2019 census indicated that 2.2% of Kenya’s population lives with some form of disability. This translates to over 900,000 individuals.",
  },
  {
    color: "#4DCDCB",
    title: "Education Access",
    text: "Only a small percentage of children with disabilities in Kenya have access to formal education, limiting their future opportunities and participation in society.",
  },
  {
    color: "#1EC87C",
    title: "Employment Gap",
    text: "PWDs in Kenya face an unemployment rate nearly double that of the general population, highlighting the need for inclusive job training and placement.",
  },
  {
    color: "#2C3675",
    title: "Support Networks",
    text: "Community and mentorship programs have been shown to significantly improve the confidence and job readiness of PWDs entering the workforce.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dataPoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div 
          className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 xl:gap-12 rounded-2xl p-6 sm:p-6 md:p-8 lg:p-10 xl:p-16 mb-2 sm:mb-4 md:mb-60 w-full mx-auto transition-colors duration-500 shadow-xl"
          style={{ 
            backgroundColor: dataPoints[current].color,
            maxWidth: '1200px'
          }}
        >
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={Hero1}
                alt="Illustration showing skills development"
                className="w-full h-full object-contain p-4 md:p-6 lg:p-8"
                loading="eager"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {dataPoints[current].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-xl">
                {dataPoints[current].text}
              </p>
            </div>
          </div>
        </div>
        
        {/* Carousel Navigation Dots */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6 px-4">
          {dataPoints.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 ${
                idx === current 
                  ? 'bg-[#4D2C5E] w-4 h-4 sm:w-5 sm:h-5' 
                  : 'bg-white/50 hover:bg-white/70 w-3 h-3 sm:w-4 sm:h-4'
              }`}
              aria-label={`Go to slide ${idx + 1} - ${dataPoints[idx].title}`}
              aria-current={idx === current ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { HomePageHero } from "../../../assets/Images";
import { HeroBackground } from "../../../assets/Images";
const Hero = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering <span className="text-secondary">Abilities</span>
              <br />
              Building <span className="text-secondary">Futures</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-[500px] leading-relaxed">
              At SkilUP-Africa, we believe in the power of skills and mentorship to
              change lives. Our platform provides practical training in various
              trades, from mechanics to jewelry making, tailored to people with
              disabilities, and connects them with mentors who help navigate the
              workforce.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <img 
                src={HomePageHero} 
                alt="home-page-hero-image" 
                className="w-full h-auto max-h-[500px] object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { WomanOnDesk } from "../../../assets/Images";
import { HeroBackground } from "../../../assets/Images";
import featureIcon1 from "../../../assets/Icons/feature-icon1.svg";
import featureIcon2 from "../../../assets/Icons/feature-icon2.svg";

const Feature = () => {
  const features = [
    {
      icon: featureIcon1,
      title: "Easily Accessible",
      description: "Learning will feel very comfortable with Courslab."
    },
    {
      icon: featureIcon2,
      title: "Fun learning experience",
      description: "Learning will feel very comfortable with Courslab."
    }
  ];

  return (
    <section 
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Premium <span className="text-secondary">Learning</span> <br />
              Experience
            </h1>
            
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md">
                    <img 
                      src={feature.icon} 
                      alt="" 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {feature.title}
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={WomanOnDesk} 
                  alt="Woman in wheelchair enjoying an accessible learning experience" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

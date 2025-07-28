import learnIcon from "../../../assets/Icons/learn-icon.svg";
import careerIcon from "../../../assets/Icons/career-icon.svg";
import certificateIcon from "../../../assets/Icons/certificate-icon.svg";

const features = [
  {
    icon: learnIcon,
    title: "Learn The Latest Skills",
    description:
      "Our platform offers valuable skills like plumbing, mechanical work, electrical work and many others to help PWDs excel in their area of work.",
  },
  {
    icon: careerIcon,
    title: "Get Ready For a Career",
    description:
      "Preparing for a career as a person with a disability involves exploring your interests, developing relevant skills, and networking with professionals in your field.",
  },
  {
    icon: certificateIcon,
    title: "Earn a Certificate",
    description:
      "Earning a certificate can enhance your skills and career opportunities, so choose a program that aligns with your interests. Completing the program demonstrates your commitment and showcases your abilities to potential employers.",
  },
];

const HeroFeature = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 md:-mt-40 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 lg:p-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start">
                  <div className="flex-shrink-0 bg-white/30 p-3 rounded-xl">
                    <img 
                      src={feature.icon} 
                      alt="" 
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h2>
                    <p className="text-white/90 text-xs sm:text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;

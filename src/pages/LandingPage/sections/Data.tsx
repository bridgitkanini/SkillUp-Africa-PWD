import { ProblemStatement } from "../../../assets/Images";

const Data = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={ProblemStatement} 
                  alt="Illustration showing the challenges faced by people with disabilities in accessing vocational education"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                Problem <span className="text-primary">Statement</span>
              </h1>
              <div className="space-y-4">
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                  In Kenya, a significant population of people with disabilities (PWD),
                  estimated at over 900,000 individuals, faces profound barriers in
                  accessing vocational education.
                </p>
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                  Despite making up 2.2% of the population, many PWD, particularly those who are intellectually
                  challenged, mobility-challenged, or deaf, struggle to find training
                  programs that accommodate their unique needs. Most existing vocational
                  training opportunities are not designed with accessibility in mind,
                  leaving these individuals without the necessary skills to thrive in
                  the workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;

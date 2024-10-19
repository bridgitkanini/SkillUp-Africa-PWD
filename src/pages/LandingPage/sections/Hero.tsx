import { HeroBackground, Hero1 } from "../../../assets/Images";

const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background image covers the full height
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4  bg-secondary rounded-2xl max-w-[1000px] m-auto p-20 relative z-10">
        <img
          src={Hero1}
          alt="carousel-image1"
          className="object-cover p-10 min-h-80 rounded-2xl"
        />
        <div className="text-white flex flex-col gap-4 p-10">
          <h3 className="text-5xl font-bold">Data Points</h3>
          <p className="w-80" >
            According to the Kenya National Bureau of Statistics (K.N.B.S), the
            2019 census indicated that 2.2% of Kenya’s population lives with
            some form of disability. This translates to over 900,000
            individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

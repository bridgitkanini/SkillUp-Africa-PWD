import { HomePageHero } from "../../../assets/Images";
import { HeroBackground } from "../../../assets/Images";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBackground})`,
        maxWidth: "",
      }}
      className="py-5 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-black">
          Empowering <span className="text-secondary">Abilities</span> <br />{" "}
          Building <span className="text-secondary">Futures</span>
        </h1>
        <p className="text-black max-w-[500px]">
          At SkilUP-Africa, we believe in the power of skills and mentorship to
          change lives. Our platform provides practical training in various
          trades, from mechanics to jewelry making, tailored to people with
          disabilities, and connects them with mentors who help navigate the
          workforce.
        </p>
      </div>
      <img src={HomePageHero} alt="home-page-hero-image" className="w-1/2" />
    </div>
  );
};

export default Hero;

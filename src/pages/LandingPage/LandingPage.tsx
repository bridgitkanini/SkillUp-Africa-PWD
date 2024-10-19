import Hero from "./sections/Hero";
import Data from "./sections/Data";
import Feature from "./sections/Feature";
import Testimonials from "./sections/Testimonials";
import HeroFeature from "./sections/HeroFeature";

const LandingPage = () => {
  return (
    <div className="bg-secondary overflow-hidden">
      <Hero />
      <HeroFeature />
      <Data />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default LandingPage;

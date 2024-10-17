import Hero from "./sections/Hero";
import Data from "./sections/Data";
import Feature from "./sections/Feature";
import Testimonials from "./sections/Testimonials";

const LandingPage = () => {
  return (
    <div className="bg-secondary overflow-hidden">
      <Hero />
      <Data />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default LandingPage;

import CheckOutCard from "../../components/CheckOutCard";
import Content from "./sections/Content";
import Hero from "./sections/Hero";

const CoursePage = () => {
  return (
    <div className="bg-[#1EC87C] overflow-hidden flex flex-col items-center justify-center">
      <Hero />
      <Content />
      <CheckOutCard />
    </div>
  );
};

export default CoursePage;

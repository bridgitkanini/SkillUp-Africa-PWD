import { TestimonialsTemporary } from "../../../assets/Images";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-20">
      <header className="text-7xl font-bold text-primary">What Students Say</header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img src={TestimonialsTemporary} alt="testimonials" />
    </div>
  );
};

export default Testimonials;

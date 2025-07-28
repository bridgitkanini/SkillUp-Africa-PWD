import { Link } from "react-router-dom";
import { CheckoutCard } from "../assets/Images";

const CheckOutCard = () => {
  return (
    <div className="bg-[#FDF8EE] p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="bg-primary m-4 sm:m-8 md:m-12 lg:m-20 pb-12 sm:pb-16 lg:pb-20 rounded-xl flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <img 
            src={CheckoutCard} 
            alt="checkout-card-styling" 
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
            Check out the Mentorship Platform
          </h1>
          <p className="text-gray-300 font-thin text-sm sm:text-base">
            Get personalised guidance on your chosen career path
          </p>
        </div>
        <Link
          to="/mentorship"
          className="text-white py-3 sm:py-4 px-6 sm:px-10 bg-secondary rounded-full text-sm sm:text-base hover:bg-opacity-90 transition-all duration-200"
        >
          Mentorship
        </Link>
      </div>
    </div>
  );
};

export default CheckOutCard;

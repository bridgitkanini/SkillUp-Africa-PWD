import { Link } from "react-router-dom";
import { CheckoutCard } from "../assets/Images";

const CheckOutCard = () => {
  return (
    <div className="bg-[#FDF8EE] p-20">
      <div className="bg-primary m-20 pb-20 rounded-xl flex flex-col gap-8 items-center justify-center">
        <img src={CheckoutCard} alt="checkout-card-styling" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl text-white font-semibold">
            Check out the Mentorship Platform
          </h1>
          <p className="text-gray-300 font-thin">
            Get personalised guidance on your chosen career path
          </p>
        </div>
        <Link
          to="/mentorship"
          className="text-white py-4 px-10 bg-secondary rounded-full"
        >
          Mentorship
        </Link>
      </div>
    </div>
  );
};

export default CheckOutCard;

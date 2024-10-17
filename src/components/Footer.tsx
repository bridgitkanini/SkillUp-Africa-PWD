import { Link } from "react-router-dom";
import logo from "../../public/skillup-africa-logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FDF8EE] overflow-hidden py-10 px-20">
      <div className="flex flex-col md:flex-row gap-10 items-center md:justify-between">
        <div className="flex flex-col gap-4 max-w-sm items-center justify-center" >
          <Link to="/" className="flex flex-row items-center self-start">
            <img
              src={logo}
              alt="logo"
              className="w-24 md:w-32 object-contain"
            />
            <h2 className="text-black font-bold text-2xl">SkillUP-Africa</h2>
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry that is 2000 years old.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/how-it-works">How It Works</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Support</h3>
          <Link to="/about">FAQ</Link>
          <Link to="/how-it-works">Help center</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Contact Info</h3>
          <p>+254 00 123 4567</p>
          <p>email@skillup-africa.org</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

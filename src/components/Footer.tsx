import { Link } from "react-router-dom";
import logo from "../../public/skillup-africa-logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FDF8EE] overflow-hidden pt-8 sm:pt-10 pb-0 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 items-start">
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-2 w-full">
            <div className="flex flex-row items-center gap-2 mb-1 sm:mb-2">
              <img
                src={logo}
                alt="logo"
                className="w-14 sm:w-16 md:w-20 object-contain"
              />
              <h2 className="text-black font-bold text-base sm:text-lg md:text-xl">
                SkillUP-Africa
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-justify w-full">
              SkillUp Africa is an innovative vocational training platform
              designed to empower people with disabilities (PWD) across the
              continent by providing accessible and inclusive education tailored
              to their unique needs. The platform offers a diverse range of
              courses, including mechanics, electrical work, plumbing, pottery,
              and jewelry making, ensuring that learners can acquire practical
              skills relevant to their interests and local job markets. With
              features such as adaptive learning materials, specialized
              instruction, and support for various disabilities, SkillUp Africa
              aims to bridge the skills gap, enhance employability, and promote
              social inclusion for PWD, ultimately fostering a more equitable
              workforce.
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Company</h3>
            <div className="flex flex-col gap-1 sm:gap-2">
              <Link to="/about" className="text-xs sm:text-sm hover:underline">About Us</Link>
              <Link to="/how-it-works" className="text-xs sm:text-sm hover:underline">How It Works</Link>
              <Link to="/popular-courses" className="text-xs sm:text-sm hover:underline">Popular Course</Link>
              <Link to="/service" className="text-xs sm:text-sm hover:underline">Service</Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Courses</h3>
            <div className="flex flex-col gap-1 sm:gap-2">
              <Link to="/categories" className="text-xs sm:text-sm hover:underline">Categories</Link>
              <Link to="/video-course" className="text-xs sm:text-sm hover:underline">Video Course</Link>
              <Link to="/online-course" className="text-xs sm:text-sm hover:underline">Online Course</Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Support</h3>
            <div className="flex flex-col gap-1 sm:gap-2">
              <Link to="/faq" className="text-xs sm:text-sm hover:underline">FAQ</Link>
              <Link to="/help-center" className="text-xs sm:text-sm hover:underline">Help Center</Link>
              <Link to="/career" className="text-xs sm:text-sm hover:underline">Career</Link>
              <Link to="/privacy" className="text-xs sm:text-sm hover:underline">Privacy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
              Contact Info
            </h3>
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="text-xs sm:text-sm">+254 700 123456</p>
              <p className="text-xs sm:text-sm break-words">skillupafrica@gmail.com</p>
              <p className="text-xs sm:text-sm">The Piano, Brookside Drive,<br />Lower Kabete, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 sm:mt-8 md:mt-10 mb-0"></div>
        <div className="text-center text-[10px] xs:text-xs text-gray-600 py-3 sm:py-4">
          © {new Date().getFullYear()} SkillUP-Africa. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

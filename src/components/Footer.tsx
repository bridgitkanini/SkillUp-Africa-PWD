import { Link } from "react-router-dom";
import logo from "../../public/skillup-africa-logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FDF8EE] overflow-hidden py-10 px-20">
      <div className="flex flex-col md:flex-row gap-10 items-center md:justify-between">
        <div className="flex flex-col gap-4 items-center justify-center md:min-w-[600px]">
          <Link to="/" className="flex flex-row items-center self-start">
            <img
              src={logo}
              alt="logo"
              className="w-24 md:w-32 object-contain"
            />
            <h2 className="text-black font-bold text-xs">SkillUP-Africa</h2>
          </Link>
          <p>
            SkillUP-Africa is an innovative vocational training platform
            designed to empower people with disabilities (PWDs) to access the
            opportunities they deserve. PWDs can access the content, practice
            the skills, and receive guidance and mentoring from industry
            experts. The platform offers diverse courses covering mechanical,
            electrical, tailoring, pottery, plumbing, jewelry making, and many
            more that learners can access at their own pace. Mentors help PWDs
            find educational and career paths best suited to their interests.
            SkillUP-Africa strives to bridge the skills and support gap for
            individuals, enabling PWDs across Africa to gain new skills, secure
            new employment, and pursue more inclusive futures. By fostering a
            community of support and opportunity, SkillUP-Africa makes inclusion
            for PWDs a reality, ultimately fostering a more equitable workforce.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/popular-courses">Popular Course</Link>
          <Link to="/service">Service</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Courses</h3>
          <Link to="/categories">Categories</Link>
          <Link to="/video-course">Video Course</Link>
          <Link to="/online-course">Online Course</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Support</h3>
          <Link to="/faq">FAQ</Link>
          <Link to="/help-center">Help Center</Link>
          <Link to="/career">Career</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Contact Info</h3>
          <p>+254 700 123456</p>
          <p>skillupafrica@gmail.com</p>
          <p>The Piano, Brookside Drive, Lower Kabete, Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

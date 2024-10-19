import learnIcon from "../../../assets/Icons/learn-icon.svg";
import careerIcon from "../../../assets/Icons/career-icon.svg";
import certificateIcon from "../../../assets/Icons/certificate-icon.svg";

const HeroFeature = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-16 m-20 -mt-28 bg-primary rounded-2xl text-white relative z-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <img
            src={learnIcon}
            alt="learn-icon"
            className="w-16 h-16 p-4 bg-white/30 rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Learn The Latest Skills</h2>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry that is 2000 years old.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <img
            src={careerIcon}
            alt="career-icon"
            className="w-16 h-16 p-4 bg-white/30 rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Advance Your Career</h2>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry that is 2000 years old.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <img
            src={certificateIcon}
            alt="certificate-icon"
            className="w-16 h-16 p-4 bg-white/30 rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Earn Certificates</h2>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry that is 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;

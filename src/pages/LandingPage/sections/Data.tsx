import { WomanOnWheelchair } from "../../../assets/Images";

const Data = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 m-10">
      <img src={WomanOnWheelchair} alt="woman on wheelchair" />
      <div className="flex flex-col gap-8">
        <h1 className="text-7xl font-bold text-white">
          Problem <span className="text-primary">Statement</span>
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-primary">
              Data Point 1
            </h2>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-primary">
              Data Point 2
            </h2>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-primary">
              Data Point 3
            </h2>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

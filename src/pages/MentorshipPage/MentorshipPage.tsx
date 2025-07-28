import CheckOutCard from "../../components/CheckOutCard"
import Hero from "../HomePage/sections/Hero"
import MentorSection from "./sections/MentorSection"

const MentorshipPage = () => {
  return (
    <div className="bg-[#2C3675] overflow-hidden w-full flex flex-col items-center justify-center">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full">
        <MentorSection />
      </div>
      <div className="w-full">
        <CheckOutCard />
      </div>
    </div>
  )
}

export default MentorshipPage
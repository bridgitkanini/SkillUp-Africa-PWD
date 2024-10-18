import CheckOutCard from "../../components/CheckOutCard"
import Hero from "../HomePage/sections/Hero"
import MentorSection from "./sections/MentorSection"

const MentorshipPage = () => {
  return (
    <div className="bg-[#2C3675] overflow-hidden flex flex-col items-center justify-center">
        <Hero />
        <MentorSection />
        <CheckOutCard />
    </div>
  )
}

export default MentorshipPage
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MentorSection = () => {
  const [activeTab, setActiveTab] = useState("#discover-mentors");

  const contentData: { [key: string]: string } = {
    "#discover-mentors":
      "Explore mentors from various fields, connect with experts, and gain insights into the skills you're interested in.",
    "#connect-with-peers":
      "Join peer discussions, collaborate on projects, and share knowledge with fellow learners.",
    "#my-networks":
      "View and manage your connections, mentors, and peers all in one place.",
  };

  const handleTabClick = (
    tabId: "#discover-mentors" | "#connect-with-peers" | "#my-networks"
  ) => {
    setActiveTab(tabId);
  };

  return (
    <div className="max-w-[1000px] flex flex-row m-40 p-20 bg-[#FDF8EE]">
      <NavigationTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="h-fit border-l border-primary/50 md:w-[600px]">
        <div className="flex-grow pl-8">
          <div className="mt-4">
            {/* Dynamically render content based on the active tab */}
            {contentData[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;

// Type definition for NavigationTabs props
interface NavigationTabsProps {
  activeTab: string;
  handleTabClick: (
    tabId: "#discover-mentors" | "#connect-with-peers" | "#my-networks"
  ) => void;
}

const NavigationTabs = ({ activeTab, handleTabClick }: NavigationTabsProps) => {
  const tabs = [
    { name: "Discover Mentors", id: "#discover-mentors" },
    { name: "Connect with Peers", id: "#connect-with-peers" },
    { name: "My Networks", id: "#my-networks" },
  ] as const;

  return (
    <div className="flex flex-col gap-4 m-4">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={
            activeTab === tab.id
              ? "flex h-10 cursor-pointer items-center text-xl rounded-full bg-secondary text-white font-semibold px-8 py-5 transition-all ease-in"
              : "flex h-10 cursor-pointer items-center text-xl bg-white rounded-full px-8 py-5 transition-all ease-in"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

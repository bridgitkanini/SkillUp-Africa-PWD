import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Content = () => {
  const [activeTab, setActiveTab] = useState("#electrical-works");
  const [isExpanded, setIsExpanded] = useState(false);

  const contentData: { [key: string]: string } = {
    "#electrical-works": "This is content for Electrical Works.",
    "#jewelry-making": "This is content for Jewelry Making.",
    "#mechanics": "This is content for Mechanics.",
    "#plumbing": "This is content for Plumbing.",
    "#pottery": "This is content for Pottery.",
    "#tailoring": "This is content for Tailoring.",
  };

  const handleTabClick = (
    tabId:
      | "#electrical-works"
      | "#jewelry-making"
      | "#mechanics"
      | "#plumbing"
      | "#pottery"
      | "#tailoring"
  ) => {
    setActiveTab(tabId);
    setIsExpanded(false);
  };

  // Function to toggle content visibility
  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="max-w-[1000px] flex flex-row m-40 p-20 bg-[#FDF8EE]">
      <NavigationTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="h-fit border-l border-primary/50 md:w-[600px]">
        <div className="flex-grow pl-8">
          <h3 className="flex items-center">
            Lesson{" "}
            <button onClick={toggleContent} className="ml-2">
              {isExpanded ? <RemoveIcon /> : <AddIcon />}
            </button>
          </h3>
          {isExpanded && (
            <div className="mt-4">
              {/* Dynamically render content based on the active tab */}
              {contentData[activeTab]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;

// Type definition for NavigationTabs props
interface NavigationTabsProps {
  activeTab: string;
  handleTabClick: (
    tabId:
      | "#electrical-works"
      | "#jewelry-making"
      | "#mechanics"
      | "#plumbing"
      | "#pottery"
      | "#tailoring"
  ) => void;
}

const NavigationTabs = ({ activeTab, handleTabClick }: NavigationTabsProps) => {
  const tabs = [
    { name: "Electrical Works", id: "#electrical-works" },
    { name: "Jewelry Making", id: "#jewelry-making" },
    { name: "Mechanics", id: "#mechanics" },
    { name: "Plumbing", id: "#plumbing" },
    { name: "Pottery", id: "#pottery" },
    { name: "Tailoring", id: "#tailoring" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={
            activeTab === tab.id
              ? "flex h-10 cursor-pointer items-center text-xl rounded-full w-fit bg-primary text-white  font-semibold px-8 py-5 mx-4 transition-all ease-in"
              : "flex h-10 cursor-pointer items-center text-xl border border-primary rounded-full px-8 py-5 mx-4 transition-all ease-in"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

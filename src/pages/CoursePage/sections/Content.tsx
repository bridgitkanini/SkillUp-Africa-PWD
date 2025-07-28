import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import lessonsData from "./LessonsData";

// Type definitions
interface Lesson {
  id: number;
  title?: string;
  content: React.ReactNode;
}

interface TabType {
  name: string;
  id: string;
  lessons: Lesson[];
}

const Content = () => {
  const [activeTab, setActiveTab] = useState("#electrical-works");
  const [expandedLessons, setExpandedLessons] = useState<{ [key: number]: boolean }>({});

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setExpandedLessons({}); // Collapse all lessons on tab change
  };

  // Function to toggle content visibility for a specific lesson
  const toggleContent = (lessonId: number) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId], // Toggle the specific lesson
    }));
  };

  // Find the active lessons data based on the active tab
  const activeLessonsData = lessonsData.find(
    (lesson: TabType) => lesson.id === activeTab
  ) as TabType | undefined;

  return (
    <div className="w-full bg-[#FDF8EE] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Tabs Navigation */}
          <div className="lg:w-1/4">
            <NavigationTabs activeTab={activeTab} handleTabClick={handleTabClick} />
          </div>
          
          {/* Content Area */}
          <div className="lg:w-3/4 bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="space-y-4">
              {activeLessonsData && activeLessonsData.lessons.map((lesson) => (
                <div key={lesson.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <h3 
                    className="flex items-center justify-between bg-primary text-white p-4 md:p-5 cursor-pointer transition-colors hover:bg-primary/90"
                    onClick={() => toggleContent(lesson.id)}
                  >
                    <span className="text-lg font-medium">
                      Lesson {lesson.id}{lesson.title ? `: ${lesson.title}` : ''}
                    </span>
                    <button 
                      className="p-1 rounded-full hover:bg-white/10 transition-colors"
                      aria-label={expandedLessons[lesson.id] ? 'Collapse lesson' : 'Expand lesson'}
                    >
                      {expandedLessons[lesson.id] ? 
                        <RemoveIcon className="text-white" /> : 
                        <AddIcon className="text-white" />
                      }
                    </button>
                  </h3>
                  {expandedLessons[lesson.id] && (
                    <div className="p-4 md:p-6 bg-gray-50">
                      <div className="prose max-w-none text-gray-700">
                        <p className="whitespace-pre-line">{lesson.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

// Type definition for NavigationTabs props
interface NavigationTabsProps {
  activeTab: string;
  handleTabClick: (tabId: string) => void;
}

const NavigationTabs = ({ handleTabClick }: NavigationTabsProps) => {
  const tabs = [
    { name: "Electrical Works", id: "#electrical-works" },
    { name: "Jewelry Making", id: "#jewelry-making" },
    { name: "Mechanics", id: "#mechanics" },
    { name: "Plumbing", id: "#plumbing" },
    { name: "Pottery", id: "#pottery" },
    { name: "Tailoring", id: "#tailoring" },
  ] as const;

  return (
    <div className="sticky top-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">Course Categories</h2>
      <div className="flex flex-col space-y-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm sm:text-base rounded-lg transition-all duration-200 ease-in-out ${
                isActive
                  ? 'bg-secondary text-white font-medium shadow-md transform -translate-x-1' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

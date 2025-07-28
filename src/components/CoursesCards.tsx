import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {
  electrical,
  jewelry,
  mechanical,
  plumbing,
  pottery,
  tailoring,
} from "../assets/Images";
import { Link } from "react-router-dom";

const CoursesCards = () => {
  const CoursesData = [
    {
      id: 1,
      title: "Electrical Works",
      subtitle: "Subtitle",
      description: "Description",
      duration: "Duration",
      lessons: "5",
      lessonimage: electrical,
      backgroundColor: "#1EC87C",
      textColor: "#fff",
    },
    {
      id: 2,
      title: "Jewelry Making",
      subtitle: "Subtitle",
      description: "Description",
      duration: "Duration",
      lessons: "5",
      lessonimage: jewelry,
      backgroundColor: "#FDF8EE",
      textColor: "#000",
    },
    {
      id: 3,
      title: "Mechanics",
      subtitle: "Subtitle",
      description: "Description",
      duration: "Duration",
      lessons: "5",
      lessonimage: mechanical,
      backgroundColor: "#F69B0A",
      textColor: "#fff",
    },
    {
      id: 4,
      title: "Pottery",
      subtitle: "Subtitle",
      description: "Description",
      duration: "Duration",
      lessons: "5",
      lessonimage: pottery,
      backgroundColor: "#D98A66",
      textColor: "#fff",
    },
    {
      id: 5,
      title: "Plumbing",
      subtitle: "Subtitle",
      description: "Description",
      duration: "Duration",
      lessons: "5",
      lessonimage: plumbing,
      backgroundColor: "#2C3675",
      textColor: "#fff",
    },
    {
      id: 6,
      title: "Tailoring",
      subtitle: "Subtitle",
      description: "Description",
      duration: "Duration",
      lessons: "5",
      lessonimage: tailoring,
      backgroundColor: "#F02E52",
      textColor: "#fff",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 w-full max-w-7xl mx-auto items-center justify-center gap-6 sm:gap-8 lg:gap-10">
      {CoursesData.map((course) => (
        <div
          key={course.id}
          className="w-full h-full rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300"
          style={{
            backgroundColor: course.backgroundColor,
            color: course.textColor,
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="flex flex-col gap-3 sm:gap-4 h-full">
            <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden rounded-2xl">
              <img
                src={course.lessonimage}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-light opacity-80">{course.subtitle}</p>
                <h3 className="text-lg sm:text-xl font-semibold mt-1">{course.title}</h3>
                <p className="text-sm sm:text-base opacity-90 mt-1">{course.description}</p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto pt-2">
                <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                  <AccessTimeIcon className="text-sm sm:text-base" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                  <AutoStoriesIcon className="text-sm sm:text-base" />
                  {course.lessons} Lessons
                </span>
              </div>
            </div>
            <Link
              to={`/courses/${course.id}`}
              className="mt-auto self-center py-2.5 px-6 sm:px-8 bg-primary hover:bg-primary/90 rounded-full text-white text-sm sm:text-base font-medium transition-colors duration-200 w-max"
            >
              Join Course
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCards;

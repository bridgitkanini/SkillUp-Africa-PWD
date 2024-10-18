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
    <div className="grid grid-cols-1 md:grid-cols-3 p-10 md:p-40 w-screen items-center justify-center gap-10 md:gap-20">
      {CoursesData.map((course) => (
        <div
          key={course.id}
          className="max-w-80 rounded-2xl p-4"
          style={{
            backgroundColor: course.backgroundColor,
            color: course.textColor,
          }}
        >
          <div className="flex flex-col gap-4">
            <img
              src={course.lessonimage}
              alt="lesson-image"
              className="rounded-2xl max-h-60 object-cover"
            />
            <div>
              <p className="text-sm font-light">{course.subtitle}</p>
              <p className="text-lg font-semibold">{course.title}</p>
              <p>{course.description}</p>
            </div>
            <div className="flex gap-4">
              <span className="flex gap-2 items-center justify-center">
                <AccessTimeIcon />
                {course.duration}
              </span>
              <span className="flex gap-2 items-center justify-center">
                <AutoStoriesIcon />
                {course.lessons} Lessons
              </span>
            </div>
            <Link
              to={`/courses/${course.id}`}
              className="flex self-center py-2 px-4 -mb-8 bg-primary rounded-full text-white "
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

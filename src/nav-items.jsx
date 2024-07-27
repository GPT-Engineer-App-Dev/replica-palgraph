import { Home, Map, BookOpen, FileText, Code } from "lucide-react";
import Index from "./pages/Index.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Courses from "./pages/Courses.jsx";
import Practice from "./pages/Practice.jsx";
import PythonCheatSheet from "./pages/PythonCheatSheet.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    icon: <Map className="h-4 w-4" />,
    page: <Roadmap />,
  },
  {
    title: "Courses",
    to: "/courses",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Courses />,
  },
  {
    title: "Practice",
    to: "/practice",
    icon: <Code className="h-4 w-4" />,
    page: <Practice />,
  },
  {
    title: "Python Cheat Sheet",
    to: "/python-cheat-sheet",
    icon: <FileText className="h-4 w-4" />,
    page: <PythonCheatSheet />,
  },
];

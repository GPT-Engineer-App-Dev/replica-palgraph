import { Home, Map, BookOpen } from "lucide-react";
import Index from "./pages/Index.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Courses from "./pages/Courses.jsx";

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
];

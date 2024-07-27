import { Outlet, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Flame } from "lucide-react";
import { useState } from "react";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`flex justify-between items-center p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center space-x-6">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="https://neetcode.io/assets/neetcode-io-logo.png"
              alt="NeetCode Logo" 
              className="w-8 h-8 transition-transform duration-300 ease-in-out hover:rotate-[15deg]"
            />
          </NavLink>
          <nav>
            <ul className="flex space-x-4">
              <li><NavLink to="/courses" className="hover:text-gray-300">Courses</NavLink></li>
              <li><NavLink to="/practice" className="hover:text-gray-300">Practice</NavLink></li>
              <li><NavLink to="/roadmap" className="hover:text-gray-300">Roadmap</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-green-700 text-white hover:bg-green-600 flex items-center gap-2">
            <Flame className="h-4 w-4" />
            Pro
          </Button>
          <Button variant="ghost" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-500">Sign in</Button>
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import { Button } from "@/components/ui/button";
import { Moon, Sun, Flame } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img 
              src="https://neetcode.io/assets/neetcode-io-logo.png" 
              alt="NeetCode Logo" 
              className="w-8 h-8 transition-transform duration-300 ease-in-out hover:rotate-[15deg]"
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Courses</a></li>
              <li><a href="#" className="hover:text-gray-300">Practice</a></li>
              <li><a href="#" className="hover:text-gray-300">Roadmap</a></li>
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
      <main className="container mx-auto mt-16 px-4">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-6">NeetCode</h2>
          <p className="text-2xl mb-8">A better way to prepare for coding interviews.</p>
          <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 text-lg">
            Get Pro
          </Button>
        </div>
        <div className="mt-16">
          <div className="w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
            Graph Placeholder
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

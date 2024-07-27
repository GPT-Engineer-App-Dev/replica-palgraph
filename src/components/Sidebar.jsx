import React from 'react';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Settings, HelpCircle, RotateCcw } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-[#1e1e1e] text-white w-64 h-full flex flex-col justify-between p-4">
      <div>
        <h2 className="text-xl font-semibold mb-4">Select Roadmap</h2>
        <div className="flex mb-4">
          <Button className="bg-blue-500 text-white mr-2">Algorithms</Button>
          <Button variant="ghost" className="text-white">Courses</Button>
        </div>
        <div className="text-sm mb-2">(2 / 150)</div>
        <Progress value={2} max={150} className="h-1 bg-gray-700" indicatorClassName="bg-green-500" />
      </div>
      <div className="flex justify-between">
        <Button variant="ghost" className="text-white">
          <RotateCcw className="h-5 w-5" />
          <span className="sr-only">Reset</span>
        </Button>
        <Button variant="ghost" className="text-white">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
        <Button variant="ghost" className="text-white">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

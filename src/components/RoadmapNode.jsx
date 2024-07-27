import React from 'react';
import { Handle } from 'react-flow-renderer';
import { Progress } from "@/components/ui/progress"

const RoadmapNode = ({ data }) => {
  return (
    <div className="relative">
      <Handle 
        type="target" 
        position="top" 
        className="w-2 h-2 !bg-blue-500" 
      />
      <div className="bg-white rounded-md shadow-md p-2 z-10 relative">
        <div className="text-blue-500 font-semibold mb-2">{data.label}</div>
      </div>
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-64">
        <Progress 
          value={data.progress} 
          className="h-1.5 bg-blue-200" 
          indicatorClassName="bg-blue-500"
        />
      </div>
      <Handle 
        type="source" 
        position="bottom" 
        className="w-2 h-2 !bg-blue-500" 
      />
    </div>
  );
};

export default RoadmapNode;

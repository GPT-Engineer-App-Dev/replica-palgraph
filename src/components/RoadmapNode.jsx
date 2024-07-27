import React from 'react';
import { Handle } from 'react-flow-renderer';
import { Progress } from "@/components/ui/progress"

const RoadmapNode = ({ data }) => {
  return (
    <div className="text-blue-500 w-48">
      <Handle 
        type="target" 
        position="top" 
        className="w-2 h-2 !bg-blue-500" 
      />
      <div className="font-semibold mb-2">{data.label}</div>
      <Progress 
        value={data.progress} 
        className="h-1.5 bg-blue-200" 
        indicatorClassName="bg-blue-500"
      />
      <Handle 
        type="source" 
        position="bottom" 
        className="w-2 h-2 !bg-blue-500" 
      />
    </div>
  );
};

export default RoadmapNode;

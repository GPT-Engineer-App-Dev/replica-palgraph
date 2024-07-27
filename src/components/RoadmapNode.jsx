import React from 'react';
import { Handle } from 'react-flow-renderer';
import { Progress } from "@/components/ui/progress"

const RoadmapNode = ({ data }) => {
  return (
    <div className="bg-card text-card-foreground shadow-md rounded-lg p-4 w-48">
      <Handle type="target" position="top" className="w-2 h-2" />
      <div className="font-semibold mb-2">{data.label}</div>
      <Progress value={data.progress} className="h-2" />
      <Handle type="source" position="bottom" className="w-2 h-2" />
    </div>
  );
};

export default RoadmapNode;

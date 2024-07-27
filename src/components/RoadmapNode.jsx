import React from 'react';
import { Handle, Position } from 'reactflow';

const RoadmapNode = ({ data }) => {
  return (
    <div className="bg-[#5468ff] text-white rounded-lg px-2 py-1 shadow-lg text-xs">
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-white" />
      <div className="text-center font-semibold">{data.label}</div>
      <div className="w-full bg-white/30 h-1 mt-1">
        <div className="bg-white h-full" style={{ width: `${data.progress}%` }}></div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-white" />
    </div>
  );
};

export default RoadmapNode;

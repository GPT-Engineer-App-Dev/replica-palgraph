import React from 'react';
import { Handle, Position } from 'reactflow';

const RoadmapNode = ({ data }) => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  return (
    <div className={`${isDarkMode ? 'bg-[#5468ff] text-white' : 'bg-[#3f51b5] text-white'} rounded-lg px-2 py-1 shadow-lg text-xs`}>
      <Handle type="target" position={Position.Top} className={`w-2 h-2 ${isDarkMode ? '!bg-white' : '!bg-gray-200'}`} />
      <div className="text-center font-semibold">{data.label}</div>
      <div className={`w-full ${isDarkMode ? 'bg-white/30' : 'bg-black/30'} h-1 mt-1`}>
        <div className={`${isDarkMode ? 'bg-white' : 'bg-gray-200'} h-full`} style={{ width: `${data.progress}%` }}></div>
      </div>
      <Handle type="source" position={Position.Bottom} className={`w-2 h-2 ${isDarkMode ? '!bg-white' : '!bg-gray-200'}`} />
    </div>
  );
};

export default RoadmapNode;

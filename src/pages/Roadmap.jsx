import React from 'react';
import { Progress } from "@/components/ui/progress"

const roadmapItems = [
  { label: 'Arrays & Hashing', progress: 75 },
  { label: 'Two Pointers', progress: 60 },
  { label: 'Stack', progress: 40 },
  { label: 'Binary Search', progress: 30 },
  { label: 'Sliding Window', progress: 20 },
  { label: 'Linked List', progress: 50 },
  { label: 'Trees', progress: 35 },
  { label: 'Tries', progress: 15 },
  { label: 'Heap / Priority Queue', progress: 25 },
  { label: 'Backtracking', progress: 10 },
  { label: 'Intervals', progress: 5 },
  { label: 'Greedy', progress: 8 },
  { label: 'Graphs', progress: 12 },
  { label: '1-D DP', progress: 18 },
  { label: 'Advanced Graphs', progress: 3 },
  { label: '2-D DP', progress: 7 },
  { label: 'Bit Manipulation', progress: 22 },
  { label: 'Math & Geometry', progress: 28 },
];

const RoadmapItem = ({ label, progress }) => (
  <div className="mb-4">
    <div className="bg-white rounded-md shadow-md p-2 mb-1">
      <div className="text-blue-500 font-semibold">{label}</div>
    </div>
    <Progress 
      value={progress} 
      className="h-1.5 bg-blue-200 w-64" 
      indicatorClassName="bg-blue-500"
    />
  </div>
);

const Roadmap = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-8">NeetCode Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapItems.map((item, index) => (
          <RoadmapItem key={index} label={item.label} progress={item.progress} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import RoadmapNode from '@/components/RoadmapNode';

const nodeTypes = {
  roadmapNode: RoadmapNode,
};

const initialNodes = [
  { id: '1', type: 'roadmapNode', position: { x: 400, y: 0 }, data: { label: 'Arrays & Hashing', progress: 75 } },
  { id: '2', type: 'roadmapNode', position: { x: 200, y: 100 }, data: { label: 'Two Pointers', progress: 60 } },
  { id: '3', type: 'roadmapNode', position: { x: 600, y: 100 }, data: { label: 'Stack', progress: 40 } },
  { id: '4', type: 'roadmapNode', position: { x: 0, y: 200 }, data: { label: 'Binary Search', progress: 30 } },
  { id: '5', type: 'roadmapNode', position: { x: 200, y: 200 }, data: { label: 'Sliding Window', progress: 20 } },
  { id: '6', type: 'roadmapNode', position: { x: 400, y: 200 }, data: { label: 'Linked List', progress: 50 } },
  { id: '7', type: 'roadmapNode', position: { x: 400, y: 300 }, data: { label: 'Trees', progress: 35 } },
  { id: '8', type: 'roadmapNode', position: { x: 200, y: 400 }, data: { label: 'Tries', progress: 15 } },
  { id: '9', type: 'roadmapNode', position: { x: 400, y: 400 }, data: { label: 'Heap / Priority Queue', progress: 25 } },
  { id: '10', type: 'roadmapNode', position: { x: 600, y: 400 }, data: { label: 'Backtracking', progress: 10 } },
  { id: '11', type: 'roadmapNode', position: { x: 200, y: 500 }, data: { label: 'Intervals', progress: 5 } },
  { id: '12', type: 'roadmapNode', position: { x: 400, y: 500 }, data: { label: 'Greedy', progress: 8 } },
  { id: '13', type: 'roadmapNode', position: { x: 600, y: 500 }, data: { label: 'Graphs', progress: 12 } },
  { id: '14', type: 'roadmapNode', position: { x: 800, y: 500 }, data: { label: '1-D DP', progress: 18 } },
  { id: '15', type: 'roadmapNode', position: { x: 600, y: 600 }, data: { label: 'Advanced Graphs', progress: 3 } },
  { id: '16', type: 'roadmapNode', position: { x: 800, y: 600 }, data: { label: '2-D DP', progress: 7 } },
  { id: '17', type: 'roadmapNode', position: { x: 1000, y: 600 }, data: { label: 'Bit Manipulation', progress: 22 } },
  { id: '18', type: 'roadmapNode', position: { x: 800, y: 700 }, data: { label: 'Math & Geometry', progress: 28 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', animated: true },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep', animated: true },
  { id: 'e4-7', source: '4', target: '7', type: 'smoothstep', animated: true },
  { id: 'e5-7', source: '5', target: '7', type: 'smoothstep', animated: true },
  { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', animated: true },
  { id: 'e7-8', source: '7', target: '8', type: 'smoothstep', animated: true },
  { id: 'e7-9', source: '7', target: '9', type: 'smoothstep', animated: true },
  { id: 'e7-10', source: '7', target: '10', type: 'smoothstep', animated: true },
  { id: 'e9-11', source: '9', target: '11', type: 'smoothstep', animated: true },
  { id: 'e9-12', source: '9', target: '12', type: 'smoothstep', animated: true },
  { id: 'e10-13', source: '10', target: '13', type: 'smoothstep', animated: true },
  { id: 'e10-14', source: '10', target: '14', type: 'smoothstep', animated: true },
  { id: 'e13-15', source: '13', target: '15', type: 'smoothstep', animated: true },
  { id: 'e14-16', source: '14', target: '16', type: 'smoothstep', animated: true },
  { id: 'e14-17', source: '14', target: '17', type: 'smoothstep', animated: true },
  { id: 'e16-18', source: '16', target: '18', type: 'smoothstep', animated: true },
  { id: 'e17-18', source: '17', target: '18', type: 'smoothstep', animated: true },
];

const Roadmap = () => {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#1e1e1e' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          style: { stroke: 'white', strokeWidth: 2 },
          type: 'smoothstep',
          animated: true,
        }}
      >
        <Background color="#333" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Roadmap;

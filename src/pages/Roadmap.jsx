import React from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState 
} from 'react-flow-renderer';
import RoadmapNode from '@/components/RoadmapNode';

const initialNodes = [
  { id: '1', position: { x: 400, y: 0 }, data: { label: 'Arrays & Hashing', progress: 75 } },
  { id: '2', position: { x: 200, y: 100 }, data: { label: 'Two Pointers', progress: 60 } },
  { id: '3', position: { x: 600, y: 100 }, data: { label: 'Stack', progress: 40 } },
  { id: '4', position: { x: 0, y: 200 }, data: { label: 'Binary Search', progress: 30 } },
  { id: '5', position: { x: 200, y: 200 }, data: { label: 'Sliding Window', progress: 20 } },
  { id: '6', position: { x: 400, y: 200 }, data: { label: 'Linked List', progress: 50 } },
  { id: '7', position: { x: 400, y: 300 }, data: { label: 'Trees', progress: 35 } },
  { id: '8', position: { x: 200, y: 400 }, data: { label: 'Tries', progress: 15 } },
  { id: '9', position: { x: 400, y: 400 }, data: { label: 'Heap / Priority Queue', progress: 25 } },
  { id: '10', position: { x: 600, y: 400 }, data: { label: 'Backtracking', progress: 10 } },
  { id: '11', position: { x: 200, y: 500 }, data: { label: 'Intervals', progress: 5 } },
  { id: '12', position: { x: 400, y: 500 }, data: { label: 'Greedy', progress: 8 } },
  { id: '13', position: { x: 600, y: 500 }, data: { label: 'Graphs', progress: 12 } },
  { id: '14', position: { x: 800, y: 500 }, data: { label: '1-D DP', progress: 18 } },
  { id: '15', position: { x: 600, y: 600 }, data: { label: 'Advanced Graphs', progress: 3 } },
  { id: '16', position: { x: 800, y: 600 }, data: { label: '2-D DP', progress: 7 } },
  { id: '17', position: { x: 1000, y: 600 }, data: { label: 'Bit Manipulation', progress: 22 } },
  { id: '18', position: { x: 800, y: 700 }, data: { label: 'Math & Geometry', progress: 28 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e7-10', source: '7', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
  { id: 'e9-12', source: '9', target: '12' },
  { id: 'e10-13', source: '10', target: '13' },
  { id: 'e10-14', source: '10', target: '14' },
  { id: 'e13-15', source: '13', target: '15' },
  { id: 'e14-16', source: '14', target: '16' },
  { id: 'e14-17', source: '14', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e17-18', source: '17', target: '18' },
];

const Roadmap = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={{
          default: RoadmapNode,
        }}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Roadmap;

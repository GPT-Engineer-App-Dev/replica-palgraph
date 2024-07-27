import { Button } from "@/components/ui/button";
import ReactFlow, { Background, Controls, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import RoadmapNode from '@/components/RoadmapNode';

const nodeTypes = {
  roadmapNode: RoadmapNode,
};

const initialNodes = [
  { id: '1', type: 'roadmapNode', position: { x: 100, y: 0 }, data: { label: 'Arrays & Hashing', progress: 75 } },
  { id: '2', type: 'roadmapNode', position: { x: 0, y: 75 }, data: { label: 'Two Pointers', progress: 60 } },
  { id: '3', type: 'roadmapNode', position: { x: 200, y: 75 }, data: { label: 'Stack', progress: 40 } },
  { id: '4', type: 'roadmapNode', position: { x: 0, y: 150 }, data: { label: 'Binary Search', progress: 30 } },
  { id: '5', type: 'roadmapNode', position: { x: 200, y: 150 }, data: { label: 'Sliding Window', progress: 20 } },
  { id: '6', type: 'roadmapNode', position: { x: 100, y: 225 }, data: { label: 'Linked List', progress: 50 } },
  { id: '7', type: 'roadmapNode', position: { x: 0, y: 300 }, data: { label: 'Trees', progress: 35 } },
  { id: '8', type: 'roadmapNode', position: { x: 200, y: 300 }, data: { label: 'Tries', progress: 15 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e1-3', source: '1', target: '3', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-4', source: '2', target: '4', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-5', source: '3', target: '5', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-6', source: '4', target: '6', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-6', source: '5', target: '6', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-7', source: '6', target: '7', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-8', source: '6', target: '8', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
];

const Index = () => {
  return (
    <div className="container mx-auto mt-16 px-4 flex items-start">
      <div className="max-w-2xl mr-8">
        <h2 className="text-5xl font-bold mb-6">NeetCode</h2>
        <p className="text-2xl mb-8">A better way to prepare for coding interviews.</p>
        <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 text-lg">
          Get Pro
        </Button>
      </div>
      <div className="flex-1 h-[400px]">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          minZoom={0.5}
          maxZoom={2}
          zoomOnScroll={false}
          panOnScroll={false}
          defaultEdgeOptions={{
            style: { stroke: 'white', strokeWidth: 1 },
            type: 'default',
            animated: true,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: 'white',
              width: 15,
              height: 15,
            },
          }}
        >
          <Background color="#333" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Index;

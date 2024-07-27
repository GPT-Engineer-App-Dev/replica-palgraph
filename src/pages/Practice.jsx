import React from 'react';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, LayoutGrid, Play, HelpCircle } from 'lucide-react';

const ProblemRow = ({ status, problem, difficulty, isPremium }) => (
  <div className="flex items-center py-2 border-b border-gray-700">
    <input type="checkbox" className="mr-4" checked={status === 'completed'} readOnly />
    <span className="flex-grow">{problem}</span>
    {isPremium && <span className="text-yellow-500 mr-2">🏆</span>}
    <span className={`px-2 py-1 rounded text-xs ${
      difficulty === 'Easy' ? 'bg-green-500' :
      difficulty === 'Medium' ? 'bg-yellow-500' :
      'bg-red-500'
    }`}>
      {difficulty}
    </span>
  </div>
);

const Practice = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-purple-900 p-4 rounded-lg">
            <img src="/placeholder.svg" alt="Algorithms & Data Structures for Beginners" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Algorithms & Data Structures for Beginners</h3>
          </div>
          <div className="bg-red-900 p-4 rounded-lg">
            <img src="/placeholder.svg" alt="Advanced Algorithms" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Advanced Algorithms</h3>
          </div>
          <div className="bg-blue-900 p-4 rounded-lg">
            <img src="/placeholder.svg" alt="System Design for Beginners" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">System Design for Beginners</h3>
          </div>
        </div>
      </div>

      <div className="mb-8 border-b border-gray-700">
        <Tabs defaultValue="core-skills" className="w-full">
          <TabsList className="flex w-full bg-transparent">
            <TabsTrigger 
              value="core-skills" 
              className="flex-1 py-2 px-4 text-black bg-white data-[state=active]:bg-white data-[state=active]:text-black hover:text-black"
            >
              📚 Core Skills
            </TabsTrigger>
            <TabsTrigger 
              value="blind-75" 
              className="flex-1 py-2 px-4 text-gray-400 bg-transparent data-[state=active]:bg-white data-[state=active]:text-black hover:text-black"
            >
              🧠 Blind 75
            </TabsTrigger>
            <TabsTrigger 
              value="neetcode-150" 
              className="flex-1 py-2 px-4 text-gray-400 bg-transparent data-[state=active]:bg-white data-[state=active]:text-black hover:text-black"
            >
              🚀 NeetCode 150
            </TabsTrigger>
            <TabsTrigger 
              value="neetcode-all" 
              className="flex-1 py-2 px-4 text-gray-400 bg-transparent data-[state=active]:bg-white data-[state=active]:text-black hover:text-black"
            >
              🌟 NeetCode All
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span>0 / 45</span>
        <div className="bg-gray-800 p-2 rounded-lg text-sm">
          Implement common data structures, algorithms, and design patterns.
        </div>
      </div>

      <Progress value={0} max={45} className="mb-8" />

      <div className="flex justify-between items-center mb-8">
        <Input type="text" placeholder="Search" className="w-64" />
        <div className="flex space-x-2">
          <Button variant="outline"><LayoutGrid className="h-4 w-4 mr-2" /> Python <ChevronDown className="h-4 w-4 ml-2" /></Button>
          <Button variant="outline"><Play className="h-4 w-4" /></Button>
          <Button variant="outline">📚</Button>
          <Button variant="outline"><HelpCircle className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <Button variant="outline">📊 Algorithms</Button>
        <Button variant="outline">🌳 Data Structures</Button>
        <Button variant="outline">🧩 Design Patterns</Button>
        <Button variant="outline">🤖 Machine Learning</Button>
      </div>

      <h3 className="text-xl font-semibold mb-4">Implement Data Structures</h3>

      <div className="space-y-2">
        <ProblemRow status="incomplete" problem="Design Dynamic Array (Resizable Array)" difficulty="Easy" />
        <ProblemRow status="incomplete" problem="Design Singly Linked List" difficulty="Easy" />
        <ProblemRow status="incomplete" problem="Design Double-ended Queue" difficulty="Easy" isPremium={true} />
        <ProblemRow status="incomplete" problem="Design Binary Search Tree" difficulty="Medium" isPremium={true} />
        <ProblemRow status="incomplete" problem="Design Hash Table" difficulty="Medium" isPremium={true} />
        <ProblemRow status="incomplete" problem="Design Heap" difficulty="Medium" isPremium={true} />
        <ProblemRow status="incomplete" problem="Design Graph" difficulty="Medium" isPremium={true} />
        <ProblemRow status="incomplete" problem="Design Disjoint Set (Union-Find)" difficulty="Medium" isPremium={true} />
        <ProblemRow status="incomplete" problem="Design Segment Tree" difficulty="Hard" isPremium={true} />
      </div>
    </div>
  );
};

export default Practice;

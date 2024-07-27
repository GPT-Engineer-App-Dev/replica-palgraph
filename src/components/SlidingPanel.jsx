import React, { useState } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const SlidingPanel = ({ isOpen, onClose, topic }) => {
  const [problems, setProblems] = useState([
    { name: "Reverse Linked List", difficulty: "Easy" },
    { name: "Merge Two Sorted Lists", difficulty: "Easy" },
    { name: "Reorder List", difficulty: "Medium" },
    { name: "Remove Nth Node From End of List", difficulty: "Medium" },
    { name: "Copy List With Random Pointer", difficulty: "Medium" },
    { name: "Add Two Numbers", difficulty: "Medium" },
    { name: "Linked List Cycle", difficulty: "Easy" },
    { name: "Find The Duplicate Number", difficulty: "Medium" },
    { name: "LRU Cache", difficulty: "Medium" },
    { name: "Merge K Sorted Lists", difficulty: "Hard" },
    { name: "Reverse Nodes in K Group", difficulty: "Hard" },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortBy = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedProblems = [...problems].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setProblems(sortedProblems);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
    }
    return <><ChevronUp className="h-4 w-4" /><ChevronDown className="h-4 w-4" /></>;
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-4/5 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{topic}</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="mb-6">
          <h3 className="text-xl mb-2">Progress</h3>
          <Progress value={0} max={11} className="h-2 bg-gray-700" indicatorClassName="bg-blue-500" />
          <p className="text-sm mt-1">(0 / 11)</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl mb-2">Prerequisites</h3>
          <div className="flex space-x-4">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold">Singly Linked Lists</h4>
              <p className="text-sm text-blue-400">Data Structures & Algorithms for Beginners</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold">Doubly Linked Lists</h4>
              <p className="text-sm text-blue-400">Data Structures & Algorithms for Beginners</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold">Fast and Slow Pointers</h4>
              <p className="text-sm text-blue-400">Advanced Algorithms</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-2">Problems</h3>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Status</th>
                <th>Star</th>
                <th className="cursor-pointer" onClick={() => sortBy('name')}>
                  Problem {getSortIcon('name')}
                </th>
                <th className="cursor-pointer" onClick={() => sortBy('difficulty')}>
                  Difficulty {getSortIcon('difficulty')}
                </th>
                <th>Video Solution</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem, index) => (
                <tr key={index} className="border-t border-gray-800">
                  <td className="py-2"><input type="checkbox" /></td>
                  <td><span className="text-yellow-500">★</span></td>
                  <td>{problem.name}</td>
                  <td className={problem.difficulty === 'Easy' ? 'text-green-500' : problem.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'}>
                    {problem.difficulty}
                  </td>
                  <td>🎥</td>
                  <td>Python</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SlidingPanel;

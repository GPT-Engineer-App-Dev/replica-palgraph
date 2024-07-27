import React, { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const SlidingPanel = ({ isOpen, onClose, topic }) => {
  const [problems, setProblems] = useState([
    { id: 1, name: "Reverse Linked List", difficulty: "Easy", completed: false },
    { id: 2, name: "Merge Two Sorted Lists", difficulty: "Easy", completed: false },
    { id: 3, name: "Reorder List", difficulty: "Medium", completed: false },
    { id: 4, name: "Remove Nth Node From End of List", difficulty: "Medium", completed: false },
    { id: 5, name: "Copy List With Random Pointer", difficulty: "Medium", completed: false },
    { id: 6, name: "Add Two Numbers", difficulty: "Medium", completed: false },
    { id: 7, name: "Linked List Cycle", difficulty: "Easy", completed: false },
    { id: 8, name: "Find The Duplicate Number", difficulty: "Medium", completed: false },
    { id: 9, name: "LRU Cache", difficulty: "Medium", completed: false },
    { id: 10, name: "Merge K Sorted Lists", difficulty: "Hard", completed: false },
    { id: 11, name: "Reverse Nodes in K Group", difficulty: "Hard", completed: false },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedCount = problems.filter(problem => problem.completed).length;
    const newProgress = Math.round((completedCount / problems.length) * 100);
    setProgress(newProgress);
  }, [problems]);

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

  const handleCheckboxChange = (problemId) => {
    setProblems(problems.map(problem =>
      problem.id === problemId ? { ...problem, completed: !problem.completed } : problem
    ));
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
          <Progress value={progress} max={100} className="h-2 bg-gray-700" indicatorClassName="bg-green-500" />
          <p className="text-sm mt-1">({problems.filter(p => p.completed).length} / {problems.length})</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl mb-2">Prerequisites</h3>
          <div className="flex space-x-4">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold">Singly Linked Lists</h4>
              <p className="text-sm text-green-400">Data Structures & Algorithms for Beginners</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold">Doubly Linked Lists</h4>
              <p className="text-sm text-green-400">Data Structures & Algorithms for Beginners</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold">Fast and Slow Pointers</h4>
              <p className="text-sm text-green-400">Advanced Algorithms</p>
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
                  <div className="flex items-center space-x-1">
                    <span>Problem</span>
                    {getSortIcon('name')}
                  </div>
                </th>
                <th className="cursor-pointer" onClick={() => sortBy('difficulty')}>
                  <div className="flex items-center space-x-1">
                    <span>Difficulty</span>
                    {getSortIcon('difficulty')}
                  </div>
                </th>
                <th>Video Solution</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem.id} className="border-t border-gray-800">
                  <td className="py-2">
                    <input
                      type="checkbox"
                      checked={problem.completed}
                      onChange={() => handleCheckboxChange(problem.id)}
                    />
                  </td>
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

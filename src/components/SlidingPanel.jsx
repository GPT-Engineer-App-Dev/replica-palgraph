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
    return (
      <div className="flex flex-col">
        <ChevronUp className="h-3 w-3" />
        <ChevronDown className="h-3 w-3" />
      </div>
    );
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-4/5 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
      <div className="p-6">
        {/* ... (previous code remains unchanged) ... */}
        <div>
          <h3 className="text-xl mb-2">Problems</h3>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Status</th>
                <th>Star</th>
                <th className="cursor-pointer" onClick={() => sortBy('name')}>
                  <div className="flex items-center">
                    Problem
                    <div className="ml-1">{getSortIcon('name')}</div>
                  </div>
                </th>
                <th className="cursor-pointer" onClick={() => sortBy('difficulty')}>
                  <div className="flex items-center">
                    Difficulty
                    <div className="ml-1">{getSortIcon('difficulty')}</div>
                  </div>
                </th>
                <th>Video Solution</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {/* ... (tbody content remains unchanged) ... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SlidingPanel;

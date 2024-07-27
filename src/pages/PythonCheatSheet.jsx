import React from 'react';

const PythonCheatSheet = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white">
      <div className="mb-8">
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube.com/embed/0K_eZGS5NsU"
          title="Python for Coding Interviews - Everything you need to Know"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">Python Cheat Sheet</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variables</h2>
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
{`# Variables are dynamicly typed
n = 0
print('n =', n)
>>> n = 0

n = "abc"
print('n =', n)
>>> n = abc

# Multiple assignments
n, m = 0, "abc"
n, m, z = 0.125, "abc", False`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default PythonCheatSheet;

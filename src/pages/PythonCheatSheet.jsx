import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code }) => (
  <SyntaxHighlighter language="python" style={vscDarkPlus} className="rounded-lg">
    {code}
  </SyntaxHighlighter>
);

const PythonCheatSheet = () => {
  const variablesCode = `
# Variables are dynamically typed
n = 0
print('n =', n)
>>> n = 0

n = "abc"
print('n =', n)
>>> n = abc

# Multiple assignments
n, m = 0, "abc"
n, m, z = 0.125, "abc", False
  `.trim();

  const dataStructuresCode = `
# Lists
fruits = ['apple', 'banana', 'cherry']
fruits.append('date')
print(fruits[0])  # Output: apple

# Dictionaries
person = {'name': 'John', 'age': 30}
print(person['name'])  # Output: John

# Sets
unique_numbers = {1, 2, 3, 3, 4}
print(unique_numbers)  # Output: {1, 2, 3, 4}

# Tuples (immutable)
coordinates = (10, 20)
  `.trim();

  const controlFlowCode = `
# If statement
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")

# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
  `.trim();

  const functionsCode = `
# Function definition
def greet(name):
    return f"Hello, {name}!"

# Function call
message = greet("Alice")
print(message)  # Output: Hello, Alice!

# Lambda function
square = lambda x: x ** 2
print(square(4))  # Output: 16
  `.trim();

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
        <CodeBlock code={variablesCode} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Structures</h2>
        <CodeBlock code={dataStructuresCode} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Control Flow</h2>
        <CodeBlock code={controlFlowCode} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Functions</h2>
        <CodeBlock code={functionsCode} />
      </section>
    </div>
  );
};

export default PythonCheatSheet;
